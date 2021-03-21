## Array Circular rotation

> Given Array of size N, and an integer X, Rotate Array by X times Left and Right.

```javascript
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
```