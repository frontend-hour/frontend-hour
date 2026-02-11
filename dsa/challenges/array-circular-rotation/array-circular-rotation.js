function isRotation (arr1, arr2) {
    let len1 = arr1.length,
        len2 = arr2.length;

    // return false if lengths are different
    if (len1 !== len2)  return false;

    // find position of first element of array2 in array 2
    let isRotated = true,
        pos = arr1.indexOf (arr2[0]);

    // Return false if element not found
    if (pos < 0)  return false;
    
    // Check all the other numbers
    for (let i=0; i<len1; i++) {
        if (arr1[(pos+i)%len1] !== arr2[i]) {
            isRotated = false;
            break;
        }
    }

    return isRotated;
}

console.log (isRotation ([1, 2, 3, 4, 5, 6, 7], [4, 5, 6, 7, 1, 2, 3]));  // true
console.log (isRotation ([1, 2, 3, 4, 5, 6, 7], [7, 1, 2, 3]));  // false
console.log (isRotation ([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]));  // false 

// solution 2

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