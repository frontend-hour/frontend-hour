// Question 1 - Factorial using recursion
// Given a non-negative integer, find it’s factorial using recursion

function findFactorial(n) {
    return n ? n * findFactorial(n - 1) : 1;
}

findFactorial(4);

// solution 2

function findFactorial(num) {
    if (num) {
        return num * findFactorial(num - 1)
    }
    return 1;
}

findFactorial(4)

// input: 4
// output: 24

// input: 5
// output: 120


// Question 2 - Fibonacci Series
// Given a number n, find the nth element in fibonacci series using recursion 
// and after that print the series till n.

/*
The Fibonacci Sequence is the series of numbers:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

The next number is found by adding up the two numbers before it:

the 2 is found by adding the two numbers before it (1+1),
the 3 is found by adding the two numbers before it (1+2),
the 5 is (2+3),
and so on! 
*/

function findFibonacci(nthElement, series, i) {
    if (!series) {
        series = [0, 1];
        i = 0;
    }

    if (series.length === nthElement) {
        return series;
    }

    series.push(series[i] + series[i + 1]);

    return findFibonacci(nthElement, series, ++i)
}
let sequence = findFibonacci(7); // Series
let numberAtNthPlace = sequence[sequence.length - 1];


// Can find a good example in the below link - 

https://medium.com/quick-code/fibonacci-sequence-javascript-interview-question-iterative-and-recursive-solutions-6a0346d24053 