# Asynchronous Programming in JavaScript

This directory contains resources and examples related to asynchronous operations in JavaScript, including Promises, Async/Await, and polyfills.

## Key Concepts
- **Promises**: Objects representing the eventual completion (or failure) of an asynchronous operation.
- **Async/Await**: Syntactic sugar built on top of Promises for writing asynchronous code that looks synchronous.
- **Polyfills**: Implementations of modern features for older environments.

## Files
- **[promises.md](promises.md)**: A deep conceptual guide to JavaScript Promises.
- **[promises.js](promises.js)**: Code examples demonstrating Promise usage.
- **[async-await.js](async-await.js)**: Examples of using `async` and `await`.
- **[promise-polyfill.js](promise-polyfill.js)**: A custom implementation of the Promise API.
- **[promisfy.js](promisfy.js)**: Utility to convert callback-based functions to Promises.

## Deep Dive

### async - await

async-await basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards.

The word `async` before a function means one simple thing: a function always returns a promise.  
`await`, that works only inside async functions, `await` makes JavaScript wait until that promise settles and returns its result.  
`await` literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

```javascript
// async & await
async function createFlow() {
  console.log('Me First Async');
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data);
  const json = await data.json();
  console.log(json);
}

createFlow();
```

### Promisification

Promisification means transformation. It’s a conversion of a function that accepts a callback into a function returning a promise.

```javascript
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
```
