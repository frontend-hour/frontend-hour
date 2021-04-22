class Graph {
    constructor() {
        this.adjacentMatrix = {}
    }

    addVertex(value) {
        this.adjacentMatrix[value] = {
            value,
            edges: []
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacentMatrix[vertex1.value].edges.push(vertex2);
        this.adjacentMatrix[vertex2.value].edges.push(vertex1);
    }

    removeEdge(vertex) {
        delete this.adjacentMatrix[vertex.value];

        Object.keys(this.adjacentMatrix).forEach((node) => {
            let index = this.adjacentMatrix[node].edges.indexOf(vertex);
            if(index !== -1) {
                this.adjacentMatrix[node].edges.splice(index, 1);
            }
        })
    }
}