## Frquency Count Problem

> Given an array, write a program to print the number of times each element is present

```
input - [ 1, 2, 3, 1, 3, 4, 4, 4, 4, 2, 5]
output -
'1' is present 2 time(s)
'2' is present 2 time(s)
'3' is present 2 time(s)
'4' is present 4 time(s)
'5' is present 1 time(s)
```

```javascript
let input = [1, 2, 3, 1, 3, 4, 4, 4, 4, 2, 5];

function getFrequencyCount(list) {
    let frequency = {};
    for (let i = 0; i < list.length; i++) {
        if (!frequency[list[i]]) {
            frequency[list[i]] = 1;
        } else {
            frequency[list[i]] += 1;
        }
    }
    let keys = Object.keys(frequency);
    for(let j = 0; j < keys.length; j ++) {
        console.log(`'${keys[j]}' is present ${frequency[keys[j]]} time(s)`);
    }
}

getFrequencyCount(input);
```

> Given a sorted array, write a function countUniques which counts the number of unique elements

```
input: [1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 6, 7]
output:
Number of unique elements = 7
```

```javascript
let input2 = [1, 1, 2, 2, 2, 3, 4, 4, 4, 4, 4, 5, 5, 5, 6, 7];

function getUniqueValues(list) {
    let uniques = [];
    for(let val of input2) {
        if(!uniques.includes(val)) {
            uniques.push(val);
        }
    }
    return uniques.length;
}

console.log(getUniqueValues(input2));
```
> Write a function “checkPowerN” which accepts 2 arrays and a number ‘N’ and returns true if each elements in array 2 are the elements of array 1 raised to the power ‘N’

```
input: arr1 = [1, 2, 3, 4], arr2 = [4, 9, 1, 16], N = 2
output: true

input: arr1 = [3, 4, 5, 2], arr2 = [1, 2, 3], N=4
output: false
```

```javascript
function checkPowerN(arr1, arr2, N) {
    let flag = true;
    for(let k of arr1) {
        if(!arr2.includes(Math.pow(k, N))) {
            flag = false;
        }
    }
    return flag;
}

console.log(checkPowerN([1, 2, 3, 4], [4, 9, 1, 16], 2));
```