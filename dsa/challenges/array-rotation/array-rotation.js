function arrayRotationRight(array, n) {
    for(let j = 0; j < n; j ++) {
        let lastItem = array.pop();
        array.unshift(lastItem);
    }
    console.log(array.join(' '));
}

function arrayRotationLeft(array, n) {
    for(let j = 0; j < n; j ++) {
        let firstItem = array.shift();
        array.push(firstItem);
    }
    console.log(array.join(' '));
}

arrayRotationRight([1, 2, 3, 4, 5, 6, 7, 8], 2);
arrayRotationLeft([1, 2, 3, 4, 5, 6, 7, 8], 2);