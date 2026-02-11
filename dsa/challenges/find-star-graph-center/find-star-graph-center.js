var findCenter = function(edges) {
    let connection = {};
    for(let i = 0; i < edges.length; i++) {
        for(let j = 0; j < edges[i].length; j++) {
            console.log(edges[i][j]);
            if(connection.hasOwnProperty(edges[i][j])) {
                connection[edges[i][j]] += 1;
            } else {
                connection[edges[i][j]] = 1;
            }
        }
    }
    let result;
    Object.keys(connection).forEach((key) => {
        if(connection[key] === edges.length) {
            result = key;
        }
    });
    return result;
};
