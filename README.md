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
