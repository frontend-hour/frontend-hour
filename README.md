# FRONTEND HOUR

![Frontend Hour](./Frontend-Hour.jpg "Frontend Hour")

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

```javascript

function closureTest() {
  var x = 2;
  return x;
}
console.log(closureTest()); // returns 2
closureTest();
// console.log(x);  Functions local variable will not be available once the functions scope is closed.

function testClosure() {
  var x = 2;
  function closeX() {
    return x;
  }
  return closeX;
}

console.log(testClosure());
let testCloseX = testClosure(); // has closeX function definition
console.log(testCloseX()); // 2

function ticketBuilder(transport) {
  let passengerNo = 0;
  return function builder(name) {
    passengerNo++;
    console.log(
      'Your ticket in ' +
      transport +
      ' welcomes ' +
      name +
      '! and your passenger no is ' +
      passengerNo
    );
  };
}

let getBusTicket = ticketBuilder('Bus'); 
// Persistent Lexical scope reference data or Closed over variable environment 
// Consists of variable environment (arguments and variables) of ticketBuilder function.

console.log(getBusTicket('Raghu'));
console.log(getBusTicket('Chaitu'));
console.log(getBusTicket('Raghu1'));

```

### Iterators and Generators

An iterator lets you iterate through a collection's contents one at a time, pausing at each item.  
An iterator is any object that implements the iterator protocol by having a next() method that returns a value property and a done property.
Generator is also kind of iterator when called returns and interable that pipelines all the yeild values one after the other on every next call on the returned iterable.
yeild is like pause or temporary return form the function.

```javascript

function createIterator(array) {
  let count = 0;
  return function next() {
    let item = array[count];
    count += 1;
    return item;
  };
}

const names = ['a', 'b', 'c'];
const namesIterator = createIterator(names);

console.log(namesIterator);
console.log(namesIterator());
console.log(namesIterator());
console.log(namesIterator());

function* createFlow() {
  let x = 0;
  let y = 90;
  let result = x + y;
  yield `Frontend Hour ${result}`;

  const newNum = yield 'returnVal';

  const num = 10 + newNum;
  yield num;
}

const generatorFlow = createFlow();

console.log(generatorFlow.next());
console.log(generatorFlow.next());
console.log(generatorFlow.next(10));
console.log(generatorFlow.next());

```

### async - await

async-await basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards.

The word `async` before a function means one simple thing: a function always returns a promise.  
`await`, that works only inside async functions, `await` makes JavaScript wait until that promise settles and returns its result.  
`await` literally suspends the function execution until the promise settles, and then resumes it with the promise result. That doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

```javascript
/* This consists Examples for Promise,
   fetch, async and await using a fake api call. 
*/
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (false) {
      resolve('Frontend Hour');
    } else {
      reject(Error('It broke'));
    }
  }, 2000);
});

promise
  .then(function (result) {
    console.log(result); // "Stuff worked!"
  })
  .catch((err) => {
    console.log(err);
  });

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

// Using generator functions

function* createFlow() {
  console.log('Me First');
  const data = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data);
  yield data.json();
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();
console.log('Me Second');
let jsonData = {};

futureData.value.then((response) => {
  jsonData = returnNextElement.next(response);
  jsonData.value.then((json) => console.log(json));
});

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

### Prototype Chaining

JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

```javascript

// Problem 

let user1 = {};
user1.name = "raghu";
user1.score = 0;
user1.incrementScore = function () {
    this.score += 1;
}
user1.printScore = function () {
    console.log(this.score);
}

let user2 = {};
user2.name = "raghu";
user2.score = 0;
user2.incrementScore = function () {
    this.score += 1;
}
user2.printScore = function () {
    console.log(this.score);
}

// Solution

function UserCreater(name, score) {
    let newUser = Object.create(userFunction);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunction = {
    incrementScore: function () {
        this.score += 1;
    },
    printScore: function () {
        console.log(this.score);
    }
}

const user1 = UserCreater('mc', 9);
const user2 = UserCreater('raghu', 19);

user1.incrementScore();

// Solution using new keyword

function UserCreater(name, score) {
    this.name = name;
    this.score = score;
}

UserCreater.prototype.incrementScore = function () {
    this.score++;
}

UserCreater.prototype.printScore = function () {
    console.log(this.score);
}

const user1 = new UserCreater('user1', 4);
const user2 = new UserCreater('user2', 3);

// Solution using class keyword

class UserCreater {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    incrementScore() {
        this.score++;
    }

    printScore() {
        console.log(this.score);
    }
}

const user1 = new UserCreater('user1', 4);
const user2 = new UserCreater('user2', 3);
```

##### Different ways to create objects and the resulting prototype chain

1. With Object.create()
2. With a constructor
3. With a class keyword

```javascript
let user1 = {
    name: 'raghu',
    score: 3,
    printScore: function() {
        console.log(this.score);
    },
    incrementScore: function() {
        user1.score++;
    }
}
let user2 = {
    name: 'raghu',
    score: 3,
    printScore: function() {
        console.log(this.score);
    },
    incrementScore: function() {
        user2.score++;
    }
}
let user3 = {
    name: 'raghu',
    score: 3,
    printScore: function() {
        console.log(this.score);
    },
    incrementScore: function() {
        user3.score++;
    }
}

/*- --------------------------------------*/

function createUser(name, score) {
    var newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.printScore = function() {
        console.log(this.score);
    }
    newUser.incrementScore = function() {
        this.score++;
    }
    return newUser;
}

let user5 = createUser('raghu', 2);
let user4 = createUser('myname', 2);

/*- --------------------------------------*/

function createUser(name, score) {
    var newUser = Object.create(userFunctionsStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionsStore = {
    printScore: function() {
        console.log(this.score);
    },
    incrementScore: function() {
        this.score++;
    }
}

let user6 = createUser('raghu', 99);
let user7 = createUser('raghu7', 99);

/*- --------------------------------------*/

function createUser(name, score) {
    this.name = name;
    this.score = score;
}
createUser.prototype.printScore = function() {
    this.score++;
}

let user8 = new createUser('name', 99);
let user9 = new createUser('name8', 99);

class CreateUser {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    incrementScore() {
        this.score++;
    }

    printScore() {
        console.log(this.score);
    }
}

let user9 = new CreateUser('nnnn', 99);

user9 = {
    name: 'nnnn',
    score: 99,
    __proto__: {
        incrementScore: function() {
            this.score++;
        },
        printScore: function() {
            console.log(this.score);
        }
    }
}
```

### Promisification

Promisification means transformation. It’s a conversion of a function that accepts a callback into a function returning a promise.
```javascript

// Problem
setTimeout(() => {
    setTimeout(() => {
        setTimeout(() => {
            setTimeout(() => {
                setTimeout(() => {
                    setTimeout(() => {
                        console.log('needed data');
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }, 100);
}, 100);

Promise
.then(cb)
.then(cb)
.then(cd)

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
```

### Throttle

Throttling enforces a maximum number of times a function can be called over time. As in “execute this function at most once every 1000 milliseconds.

```javascript
function throttle(fn, time) {
    let timeout;

    return function () {
        if (timeout) {
            return;
        }

        timeout = setTimeout(() => {
            fn.apply(this, arguments);
            timeout = null;
        }, time);
    }
}

function printName(name) {
    console.log(name);
}

const throttlePrintName = throttle(printName, 1000);

// So, Throttling enforces a maximum number of times a function can be called over time. As in “execute this function at most once every 1000 milliseconds.”

function keyUpEvent(e) {
    throttlePrintName(e.target.value)
}
```

### Debounce

Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in “execute this function only if 1000 milliseconds have passed without it being called.”

```javascript
function debounce(fn, ms) {
    let timeoutId;

    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(this, arguments);
        }, ms);
    }
}

function printName(name) {
    console.log(name);
}

const debouncePrintName = debounce(printName, 1000);

//So, Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in “execute this function only if 1000 milliseconds have passed without it being called.”

function keyUpEvent(e) {
    debouncePrintName(e.target.value)
}
```

### Coercion

Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.
