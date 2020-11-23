// 
let val = Promise.resolve(4);
let val2 = Promise.reject(5);

let newPromiseObject1 = new Promise((res, rej) => {
    setTimeout(res, 1000, 'raghu');
});

let newPromiseObject2 = new Promise((res, rej) => {
    setTimeout(rej, 1000, 'chaitu');
});

newPromiseObject1.then((val1) => {
    console.log(val1);
});

newPromiseObject2.then((val2) => {
    console.log(val2);
});

Promise((res, rej) => {
    res(9)
}).then((val) => {
    console.log(val);
});

// Promise.all(iterable);

const promise1 = Promise.reject(5);
const promise2 = 4;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'all-promise')
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});

// [5, 4, 'al-promise']

Promise.allSettled([promise1, promise3]).then((values) => {
    console.log(values);
});

