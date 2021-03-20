let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let moveMethods = {
    right: function (array, x, y) {
        for(let k = 0; k < array; k ++) {
            console.log(x + k, y);
        }
    },
    down: function (array, x, y) {
        for(let k = 0; k < array; k ++) {
            console.log(x, k + y);
        }
    },
    left: function (array, x, y) {
        for(let k = x; k <= 0; k --) {
            console.log(k, y);
        }
    },
    up: function (array, x, y) {
        for(let k = y; k <= 0; k --) {
            console.log(x, k);
        }
    },
}

function printMatrixInClockWise(array) {

}

printMatrixInClockWise(matrix);