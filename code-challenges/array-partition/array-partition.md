## Array Partition

>Write a program to divide the given array into sub arrays where each sub array is of the length equal to the given partition size.

### Example

> input: partition([1,2,3,4,5,6,7,8], 2)
output: [[1, 2], [3, 4], [5, 6], [7, 8]]
   
>input: partition([1,2,3,4,5,6,7], 2)
output: [[1, 2], [3, 4], [5, 6], [7]]

```javascript
function arrayPartition(array, partitions) {
    let cuts = partitions;
    if(!array.length) {
        return [];
    }
    let parts = [];
    let temp = [];
    for(let i = 0; i < array.length; i ++) {
        if(i === (cuts- 1)) {
            temp.push(array[i]);
            parts.push(temp);
            temp = [];
            cuts = cuts + partitions;
        } else {
            temp.push(array[i]);
            if(i === array.length - 1) {
                parts.push(temp);
            }   
        }
    }

    return parts;
}

let newArray = arrayPartition([1,2,3,4,5,6,7], 2);
console.log(newArray);
```

##### Solution 2 

```javascript

function arrayChuncking(arr, size) {
    let allChunks = [];

    while(arr.length > 0) {
        allChunks.push(arr.splice(0, size));
    }
    return allChunks;
}
arrayChuncking([1,2,3,4,5,6,7], 2)

```