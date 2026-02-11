## Search Common Elements in Both the Arrays in N Square time complexity

> input: arr1: [1, 2, 3, 4, 5, 6, 7], arr2: [4, 2, 9, 1]
> output: [1, 2, 4] // The elements can be printed in any order

> input: arr1: [0, 12, 41, 20], arr2: [9, 3, 1, 5]
> output: []


```javascript
function commonElementSearch(arr1, arr2) {
    let arr1Sorted = arr1.sort();
    let arr2Sorted = arr2.sort();
    let commonElements = [];

    for (let i = 0; i < arr1Sorted.length; i++) {
        for (let j = 0; j < arr2Sorted.length; j++) {
            if (arr1Sorted[i] === arr2Sorted[j]) {
                if (!commonElements.includes(arr1Sorted[i])) {
                    commonElements.push(arr1Sorted[i]);
                }
            }
        }
    }
}
commonElementSearch([1, 2, 3, 4, 5, 6, 7], [4, 2, 9, 1])
```

## Search Common Elements in Both the Arrays(Sorted) O(n+m) time
 
```javascript
function commonElementSearchSorted(arr1, arr2) {
    let i = 0;
    let j = 0;
    let commonNumbers = [];
    while((i < arr1.length) && (j < arr2.length)) {
        if(arr1[i] === arr2[j]) {
            commonNumbers.push(arr1[i]);
            i++; j++
        } else if(arr1[i] < arr2[j]) {
            i += 1;
        } else if(arr1[i] > arr2[j]) {
            j += 1;
        }
    }
    return commonNumbers;
}

console.log(commonElementSearchSorted([1, 2, 3, 4, 5, 6, 7].sort(), [4, 2, 9, 1].sort()));
```