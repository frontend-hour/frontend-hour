## Factorial

>  Factorial using recursion, Given a non-negative integer, find it’s factorial using recursion


```
input: 4
output: 24

input: 5
output: 120
```

```javascript
// solution 1
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

findFactorial(4) // 24
findFactorial(5) // 120
```
