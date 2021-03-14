// Question -- Write a function that takes an integer n as input and prints first n lines of Pascal's Triangle
// input: 5
// output:
// 1  
// 1 1 
// 1 2 1 
// 1 3 3 1 
// 1 4 6 4 1 

function printPascalTriangle(n) {
    let triangle = [];
    for (let i = 0; i < n; i++) {
        if (!triangle[i]) {
            triangle[i] = [];
        }
        for (let j = 0; j <= i; j++) {
            if (j === 0 && i === 0) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = (triangle[i - 1][j - 1] || 0) + (triangle[i - 1][j] || 0);
            }
        }
    }
    triangle.forEach((item) => {
        console.log(...item);
    });
    return triangle;
}

console.log(printPascalTriangle(10));