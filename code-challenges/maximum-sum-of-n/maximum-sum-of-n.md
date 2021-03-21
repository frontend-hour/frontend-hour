## Maximum sum of n consecutive number

>Given an array of integers and a number n, write a function which returns the maximum sum of n consecutive numbers in that array.

```
Example

input: arr = [1, 3, 2, 4, 7, 5, 4], N = 3
output: 16 (7 + 5 + 4)
```

```javascript
function maxSubArraySum(arr, num) {
    var sum = 0;
    arr.sort().reverse();
    for (var i = 0; i < num; i++) {
        sum = sum + arr[i];
    }
    return sum;;
}
```