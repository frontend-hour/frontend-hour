## Matrix Rotation

> Given a 2 dimensional (NxN) square array, write a function that rotates the given array by 90 degrees clockwise

```
input:
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

output: 
[
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]
```

```javascript
function rotateMatrixClockWise(twoDMatrix) {
    let rotatedList = [];
    let temp = [];
    for (let i = 0; i < twoDMatrix.length; i++) {
        temp = [];
        for (let k = twoDMatrix.length - 1; k >= 0; k--) {
            temp.push(twoDMatrix[k][i]);
        }
        rotatedList.push(temp);
    }
    return rotatedList;
}

console.log(rotateMatrixClockWise(matrix));
```