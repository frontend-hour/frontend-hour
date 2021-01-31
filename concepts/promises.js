// Returns a new Promise object that is resolved with the given value. 
// If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable,
// adopting its eventual state; otherwise, the returned promise will be fulfilled with the value. 
let val = Promise.resolve(4);

// Returns a new Promise object that is rejected with the given reason.
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
/*
 The Promise.all() method takes an iterable of promises as an input, 
 and returns a single Promise that resolves to an array of the results of the input promises.
 This returned promise will resolve when all of the input's promises have resolved,
 or if the input iterable contains no promises.
 It rejects immediately upon any of the input promises rejecting or non-promises throwing an error,
 and will reject with this first rejection message / error
*/

const promise1 = Promise.reject(5);
const promise2 = 4;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'all-promise')
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});

// [5, 4, 'al-promise']


// Promise.allSettled()
/*
The Promise.allSettled() method returns a promise that resolves 
after all of the given promises have either fulfilled or rejected, 
with an array of objects that each describes the outcome of each promise.

It is typically used when you have multiple asynchronous tasks that are not dependent on one another
to complete successfully, or you'd always like to know the result of each promise.
*/
Promise.allSettled([promise1, promise3]).then((values) => {
    console.log(values);
});

// Promise.any()
/*
Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills,
returns a single promise that resolves with the value from that promise.
If no promises in the iterable fulfill (if all of the given promises are rejected),
then the returned promise is rejected with an AggregateError,
a new subclass of Error that groups together individual errors.
Essentially, this method is the opposite of Promise.all().
*/
const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));

// Promise.race()
/*
The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises
in an iterable fulfills or rejects, with the value or reason from that promise.
*/

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });
  
  Promise.race([promise1, promise2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
  // expected output: "two"

