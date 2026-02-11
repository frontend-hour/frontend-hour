# Functions & `this` Context

Deep dive into function manipulation, context binding, and functional programming concepts.

## Key Concepts
- **`this` Keyword**: How context is determined in different function invocations.
- **Call, Apply, Bind**: Methods to explicitly set the `this` context.
- **Currying & Composition**: Functional programming techniques.
- **Memoization**: Caching function results for performance.

## Files
- **[call-apply-bind.js](call-apply-bind.js)**: Usage of explicit binding methods.
- **[bind-polyfil.js](bind-polyfil.js)**: Implementation of `Function.prototype.bind`.
- **[this-keyword.js](this-keyword.js)**: Examples clarifying `this` behavior.
- **[currying.js](currying.js)**: Transforming functions to take arguments one at a time.
- **[function-composition.js](function-composition.js)**: Combining functions to build complex logic.
- **[memoization.md](memoization.md)**: Deep guide to memoization.

## Deep Dive

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
