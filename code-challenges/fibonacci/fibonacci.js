// solution 1
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

// Solution 2
function fib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

// solution 3 - Iterative solution 
function fibonacci(num) {
    var arr = [0, 1]
    for (i = 0; i < num + 1; i++) {
        arr.push(arr[num - 2] + arr[num - 1])
    }
    return arr[num]
}