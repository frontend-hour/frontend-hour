
function list() {
    return [].slice.call(arguments);
}
var leadingThirtysevenList = list.bind(null, 37);
var list2 = leadingThirtysevenList();
console.log(list2);

//   / Output  ??? 

// What is the upper limit of the number of arguments that the method Array.of() can accept? 



function foo() {
    'use strict';
    (function () {
        var point = { x: 42, y: 27 };
        with (point) {
            console.log('The coordinates are: x: ', x, 'y: ', y);
        }
    })();
}
foo();

//   What does this print to the console and why?

function Foo() { }
function Bar() { }
Bar.prototype = Object.create(Foo.prototype);

let banana = new Bar();
let apple = new Foo();

console.log(Bar.prototype.isPrototypeOf(apple));
console.log(Bar.prototype.isPrototypeOf(banana));
console.log(Foo.prototype.isPrototypeOf(banana));

// false
// true 
// true 

let a = 0;
function foo() {
    a ^= 1;
}
foo();
foo();
foo();

console.log(a);

// 1