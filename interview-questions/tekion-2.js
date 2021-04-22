// 1. Debounce

// 2.array flat with reduce
function flatten(list) {
    return list.reduce(function (flattenArray, item) {
        return flattenArray.concat(Array.isArray(item) ? flatten(item) : item);
    }, [])
}

flatten([1, 2, [3, 4, [5, [6]]], 7, 0]); // [1, 2, 3, 4, 5, 6, 7, 0]

// How to create a custom promise.
var promise = new Promise((resolve, reject) {
    setTimeout()
});

class ownPromise {
    constructor() {
        this.value = null;
        this.fullfilled = function (resolve, reject) {
        };
        this.rejected = [];
    }
    then(cb) {
        cb(this.value);
    }
    resolve(value) {
        this.value = value;
    }
    reject(error) {
        throw `error`;
    }
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

Promise.resolve()
    .then(function () {
        console.log('promise1');
    })
    .then(function () {
        console.log('promise2');
    });

console.log('script end');

// script start 
// script end
// promise1 
// promise2 
// setTimeout
