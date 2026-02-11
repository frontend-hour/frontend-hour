# Closures & Scope

Mastering scope, closures, and variable lifecycle in JavaScript.

## Key Concepts
- **Closures**: Functions that retain access to their lexical scope even when executed outside that scope.
- **Hoisting**: Variable and function declaration behavior during the creation phase.
- **Temporal Dead Zone (TDZ)**: The period where `let` and `const` variables exist but cannot be accessed.

## Files
- **[closure.js](closure.js)**: Examples of closures in action.
- **[trickyClosure.js](trickyClosure.js)**: Advanced closure challenges.
- **[hoisting.js](hoisting.js)**: Demonstrations of variable hoisting.
- **[temporal-dead-zone.js](temporal-dead-zone.js)**: Understanding TDZ with `let` and `const`.

## Deep Dive

### Closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).  
In other words, a Closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.  
To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function. The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

```javascript
// Basic Example
function closureTest() {
  var x = 2;
  return x;
}
console.log(closureTest()); // returns 2
// closureTest();
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

// Practical Example: Ticket Builder
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
