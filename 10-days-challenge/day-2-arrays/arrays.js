// Array Flat Problem;

const complexArr = [2, 2, 5, [5, [5, [6]], 7]];

function arrayFlat(nestedArray, accumulator = []) {
    if (Array.isArray(nestedArray)) {
        nestedArray.forEach((item) => {
            if (Array.isArray(item)) {
                arrayFlat(item, accumulator);
            } else {
                accumulator.push(item);
            }
        });
        return accumulator;
    } else {
        throw new Error('Expected array as input but received ' + typeof nestedArray);
    }
}

console.log(arrayFlat(complexArr));

// Array rotation

function arrayRotationRight(array, n) {
    for (let j = 0; j < n; j++) {
        let lastItem = array.pop();
        array.unshift(lastItem);
    }
    console.log(array.join(' '));
}

function arrayRotationLeft(array, n) {
    for (let j = 0; j < n; j++) {
        let firstItem = array.shift();
        array.push(firstItem);
    }
    console.log(array.join(' '));
}

arrayRotationRight([1, 2, 3, 4, 5, 6, 7, 8], 2);
arrayRotationLeft([1, 2, 3, 4, 5, 6, 7, 8], 2);

// Array Chunking

function arrayChuncking(arr, size) {
    let allChunks = [];

    while (arr.length > 0) {
        allChunks.push(arr.splice(0, size));
    }
    return allChunks;
}
arrayChuncking([1, 2, 3, 4, 5, 6, 7], 2);

// Array Circulary rotated

function isRotation(arr1, arr2) {
    let len1 = arr1.length,
        len2 = arr2.length;

    // return false if lengths are different
    if (len1 !== len2) return false;

    // find position of first element of array2 in array 2
    let isRotated = true,
        pos = arr1.indexOf(arr2[0]);

    // Return false if element not found
    if (pos < 0) return false;

    // Check all the other numbers
    for (let i = 0; i < len1; i++) {
        if (arr1[(pos + i) % len1] !== arr2[i]) {
            isRotated = false;
            break;
        }
    }

    return isRotated;
}

console.log(isRotation([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3]));  // true
console.log(isRotation([1, 2, 3, 4, 5, 6, 7], [7, 1, 2, 3]));  // false
console.log(isRotation([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]));  // false 

/*
Question – Given a set of integers, and a number, find all unique combinations in the integer array whose sum equals the given number.

Example

input: arr = [2,3,6,7], num = 7
output: Solution set -
[
    [7],
    [2,2,3]
]

input: arr = [2, 4, 6, 8], num = 8
output: Solution set -
[
    [2, 2, 2, 2]
    [2, 2, 4]
    [2, 6]
    [4, 4]
    [8]
]

*/