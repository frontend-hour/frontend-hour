# FRONTEND HOUR

Frontend Hour is a concept of one hour learning Everyday. This Repository is a collection of all the major Frontend Concepts.


## Concepts

1. Array Methods
2. Async Await
3. Bind Polyfill
4. Call, Apply, Bind
5. Class, Class Extending
6. Closure
7. Collections
8. Currying
9. Debounce
10. Destructuring
11. Event Loop
12. Extends with/without new
13. Function Composition
14. Hoisting
15. Interators and Generators
16. Object Oriented Javascript
17. Promises
18. Promisfy
19. Prototype Chain
20. Recursion
21. Temporal Dead Zone
22. Throttle
23. Value and Reference
24. Basic Design Paterns


## Algorithms

1. Basics
2. Bubble Sort
3. Insertion Sort
4. Merge Sort
5. Quick Sort


##  Problems

1. Array Flat
2. Array Unique value
3. Coercion Problem
4. Get By Path
5. Longest String
6. Move Element
7. Number Pairs
8. Scope Problem
9. Shared Numbers
10. Sleep
11. Small Tricky Interview questions
12. This Keyword

### Function Composition

Function composition is the process of combining two or more functions to produce a new function.  
Composing functions together is like snapping together a series of pipes for our data to flow through.  
Put simply, a composition of functions `x` and `y` can be defined as `z(y(z))`, which evaluates from the inside out — right to left.
In other words, the evaluation order is: `z`, `y`, `x`

```javascript
let reduceArray = [1, 2, 3];
reduceArray.reduce((input, item) => {
  console.log(`input: ${input}, item: ${item}`);
  return input + item;
}, 11);

function addTwo(num) {
  return num + 2;
}

function divideByFive(num) {
  return num / 5;
}

function multiplyByFour(num) {
  return num * 4;
}

let m1 = multiplyByFour(divideByFive(addTwo(3)));
console.log(
  'Function composition for `((x + 2) / 5) * 4` with `x` of 3 is:',
  m1
);

let a = [addTwo, divideByFive, multiplyByFour].reduce((input, fun) => {
  return fun(input);
}, 3);
console.log('Function Composition for same using Array reduce - ', a);

```

### Closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).  
In other words, a Closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.  
To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function. The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

### Iterators and Generators

An iterator lets you iterate through a collection's contents one at a time, pausing at each item.  
An iterator is any object that implements the iterator protocol by having a next() method that returns a value property and a done property.

TBC...

### async - await

async-await basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards.

The word `async` before a function means one simple thing: a function always returns a promise.  
`await`, that works only inside async functions, `await` makes JavaScript wait until that promise settles and returns its result.  
`await` literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

### Prototype Chaining

JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

##### Different ways to create objects and the resulting prototype chain

1. With Object.create()
2. With a constructor
3. With a class keyword

### Week 12th - 16th Oct 2020:

-   Coercion
-   Debounce
-   move-element
-   promisify
-   shared-number
-   sleep
-   Throttle

### Promisification

Promisification means transformation. It’s a conversion of a function that accepts a callback into a function returning a promise.

### Throttle

Throttling enforces a maximum number of times a function can be called over time. As in “execute this function at most once every 1000 milliseconds.”

### Debounce

Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in “execute this function only if 1000 milliseconds have passed without it being called.”

### Coercion

Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
