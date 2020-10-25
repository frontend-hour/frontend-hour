// problem

var x = 5;

function printNum() {
    console.log(x);
    var x = 20;
}

printNum();

var a; // Declaration
a = 2; // Assignment
console.log(a); // Usauge

/*
    Hoisting is a Javascript Mechanism
    where variables and function declarations are moved to the top of their scope before code execution
*/

console.log('counter', counter);
var counter = 1;

// ------------------------ //

let z = 20;
let y = 10;

let result = add(z, y);
console.log(result);
function add(a, b) {
    return a + b;
}

console.log('%c Raghu %c Chaitu', 'color: Red; font-size: 60px', 'color: Blue; font-size: 60px');

let user1 = {
    name: 'raghu',
    age: 3,
    gender: 'male'
}

let user2 = {
    name: 'chaitu',
    age: 3,
    gender: 'male'
}

let user3 = {
    name: 'siddhu',
    age: 3,
    gender: 'male'
}

console.table([user1, user2, user3]);

function foo() {
    console.count('foo');
    console.trace();
}

foo();
foo();
foo();

