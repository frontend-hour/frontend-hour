## Fibonacci Series

> Given a number n, find the nth element in fibonacci series using recursion and after that print the series till n.


> The Fibonacci Sequence is the series of numbers:
> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

> The next number is found by adding up the two numbers before it:
> the 2 is found by adding the two numbers before it (1+1),
> the 3 is found by adding the two numbers before it (1+2),
> the 5 is (2+3),
> and so on! 

#### Can find a good example in the below link - 
[https://medium.com/quick-code/fibonacci-sequence-javascript-interview-question-iterative-and-recursive-solutions-6a0346d24053](https://medium.com/quick-code/fibonacci-sequence-javascript-interview-question-iterative-and-recursive-solutions-6a0346d24053)

```javascript
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
```

1. Now look at the case when we call fib() with n=15. It took iterative solution 4ms, but it took recursive solution 1328ms to perform the same action. Why is that?

2. An algorithm in our iterative solution takes linear time to complete the task. Basically we iterate through the loop n-2 times, so Big O (notation used to describe our worst case scenario) would be simply equal to n in this case.

3. In case of recursion the solution take exponential time, that can be explained by the fact that the size of the tree exponentially grows when n increases. So for every additional element in the Fibonacci sequence we get an increase in function calls. Big O in this case is equal to 2^n.