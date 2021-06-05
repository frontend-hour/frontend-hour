/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let magic = [];
    for(let i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i]);
        let minIndex = matrix[i].indexOf(min);
        let max = [];
        for(let j = 0; j < matrix.length; j++) {
            max.push(matrix[j][minIndex]);
        }
        let m = Math.max(...max);
        if(!magic.includes(m) && min === m) {
            magic.push(m);
        }
    }
    return magic;
};
