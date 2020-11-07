
// Problem
// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {
//             setTimeout(() => {
//                 setTimeout(() => {
//                     setTimeout(() => {
//                         console.log('needed data');
//                     }, 100);
//                 }, 100);
//             }, 100);
//         }, 100);
//     }, 100);
// }, 100);

// Promise
// .then(cb)
// .then(cb)
// .then(cd)

// Solution

function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function cb(response) {
                resolve(resolve);
            }
            fn.apply(this, [cb].concat(args));
        });
    }
}

let promisifySetTimeout = promisify(setTimeout);

function printNames() {
    console.log('Second Call back called');
}

function printNameAndReturnPromise() {
    console.log('First Call back called');
    return promisifySetTimeout(1000);
}

promisifySetTimeout(2000)
    .then(printNameAndReturnPromise)
    .then(printNames);


