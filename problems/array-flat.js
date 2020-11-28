const arr = [[[1, [1.1]], 2, 3], [4, 5]]; // [1, 1.1, 2, 3, 4, 5]

function flatArray(array, accumulator) {
    if (!accumulator) {
        accumulator = [];
    }
    for (let x = 0; x < array.length; x++) {
        if (Array.isArray(array[x])) {
            flatArray(array[x], accumulator);
        } else {
            accumulator.push(array[x]);
        }
    }
    return accumulator;
}

console.log(flatArray(arr));


// for in loop - Objects - Array is also object
for(key in { a: 1, b : 2}) {

}

for(item in [1, 2, 3, 4]) {

}

// for of loop - Only for Array

for(let item in [1, 2, 3, 4]) {

}