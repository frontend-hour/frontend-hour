function foo() {
    let a = b = 0;
    a++;
    return a;
  }
  
  foo();
  typeof a; // => ???
  typeof b; // => ???

/*---------------------------------------*/

const clothes = ['jacket', 't-shirt'];
clothes.length = 0;

clothes[0]; // => ???

/*---------------------------------------*/

const length = 4;
const numbers = [];
for (var i = 0; i < length; i++);{
  numbers.push(i + 1);
}

numbers; // => ???

/*---------------------------------------*/

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  }
  setTimeout(log, 100);
}

/*---------------------------------------*/

0.1 + 0.2 === 0.3 // => ???

/*---------------------------------------*/

myVar;   // => ???
myConst; // => ???

var myVar = 'value';
const myConst = 3.14;

/*---------------------------------------*/

var a = Person('a');
var b = new Person('b');
var c = Person;
function Person(name) {
     this.first_name = name;
}

console.log(a.first_name);
console.log(b.first_name);
console.log(c.first_name);

