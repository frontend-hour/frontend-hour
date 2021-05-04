## Find Star Graph center

> There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

> You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.

![image](https://user-images.githubusercontent.com/11692119/116949810-e7e19e80-aca0-11eb-83b5-a84fc9c232cd.png)


```
Input: edges = [[1,2],[2,3],[4,2]]
Output: 2
Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.
```

```
Input: edges = [[1,2],[5,1],[1,3],[1,4]]
Output: 1
```

```javascript
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
```
