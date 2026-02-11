let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

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

console.log(`
[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]
`);