## Array Circular rotation

> Given 2 arrays (with no duplicate entries in any array), find whether one can be formed by rotating the other by ‘n’ elements. n < array length

```
input: arr1 = [1, 2, 3, 4, 5, 6, 7], arr2 = [4, 5, 6, 7, 1, 2, 3]
output: true

input: arr1 = [1, 2, 3, 4, 5, 6], arr2 = [6, 5, 4, 3, 2, 1]
output: false

input: arr1 = [1, 4, 2, 3, 6, 7, 9], arr2 = [5, 6, 2, 1, 9, 4]
output: false
```


```javascript
function arrayRotated(list1, list2) {
    let firstIndexValue = list1[0];
    let indexInSecondList = list2.indexOf(firstIndexValue);
    if (indexInSecondList !== -1) {
        let firstPart = list2.slice(0, indexInSecondList);
        let secondPart = list2.slice(indexInSecondList, list2.length);
        let rotatedList = secondPart.concat(firstPart);
        console.log(firstPart, secondPart, rotatedList);

        if (list1.length === rotatedList.length) {
            for (let j = 0; j < list1.length; j++) {
                if (list1[j] !== rotatedList[j]) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}

console.log(arrayRotated([1, 2, 3, 10, 4, 5, 6, 7, 8], [10, 4, 5, 6, 7, 8, 1, 2, 3]));
console.log(arrayRotated([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]));
console.log(arrayRotated([1, 4, 2, 3, 6, 7, 9], [5, 6, 2, 1, 9, 4]));
```