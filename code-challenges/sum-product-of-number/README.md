## Sum and Product of given numbers
### Question 1
> Given a number, write a program to find the sum of it's digits using recursion

```
input: 12345
output: 15

input: 91827
output: 27
```

```javascript
// Solution 1 
function sumOfDigits(num) {
    var sum = 0;
    var numberArr = num.toString().split('');
    sum = numberArr.reduce((acc, item) => Number(acc) + Number(item), sum);
    return sum;
}
sumOfDigits(91827)

// Solution 2 - Using recursion 
function sumOfDigitsRecursion(num) {
    let numStr = num.toString().split('');
    let firstChar = numStr[0];
    let remainingChars = numStr.slice(1);
    if (remainingChars.length) {
        return Number(firstChar) + sumOfDigitsRecursion(Number(remainingChars.join('')));
    }
    return Number(firstChar);
}

sumOfDigitsRecursion(12345);

function findSumOfGivenDigitsRecursion(digit) {
    if (isNaN(digit)) {
        return 'Not a valid Input';
    }
    let [first, ...rest] = (String(digit)).split('');

    if (rest && rest.length) {
        return Number(first) + findSumOfGivenDigitsRecursion(Number(rest.join('')));
    } else {
        return Number(first);
    }
}

console.log(findSumOfGivenDigitsRecursion(91827));
```
### Question 2
> Given 2 numbers, write a program to find their product using recursion
```
input: 10,5
output: 50

input: -8,4
output: -32
```

```javascript
function findProductOfTwoNumberRecursion(a, b) {
    if (!a) return b;
    return a * findProductOfTwoNumberRecursion(undefined, b);
}

console.log(findProductOfTwoNumberRecursion(-8, 4));
```




