# frontend-hour

Targetting to revice and recall all the major concepts of JavaScript & AdvancedJS and make them available at one place for further reference.

Below are the series of Concepts being discussed as an when we are available. (Updating concepts after they are being discussed)

### Function Composition

Function composition is the process of combining two or more functions to produce a new function.  
Composing functions together is like snapping together a series of pipes for our data to flow through.  
Put simply, a composition of functions `x` and `y` can be defined as `z(y(z))`, which evaluates from the inside out — right to left.
In other words, the evaluation order is: `z`, `y`, `x`

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