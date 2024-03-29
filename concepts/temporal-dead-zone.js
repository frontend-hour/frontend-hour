// Temporal Dead Zone
/*
In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError . The time span when that happens, between the creation of a variable's binding and its declaration, is called the temporal dead zone.
*/
console.log(g);
console.log(x);

let x = 2;
var g = 9;
function b(y = x, x) {
    x = 3;
    console.log(y);
}
b();

var myVar = 1;
function foo(myParam = function () { return myVar + 3 }) {
    var myVar = 5;
    console.log(myParam())
}
foo();

var myVar = 1;
function someFunc() {
    var myVar = 10;
    console.log(myVar);
}
console.log('myVar', myVar); // 1

var var1 = 2;
if (true) {
    var var1 = 10;
}

console.log('var1', var1); // 10

let var2 = 2;
if (true) {
    let var2 = 4;
}
console.log('var2', var2); // 2

var raghu = 'name';
let you = 'name1';

console.log(window.raghu);
console.log(window.you);

console.log(hoist);
var hoist = 3;

// var - initializer - undefined
// let const - initialisation - TDZ

function x1(cord1, cord2) {

}
x1();