// Creating Array
let newArray = [];
let newArrayInstance = new Array;
let newArrayInstanceWithValues = new Array(1, 2, 3, 4, 5);
//This will create an array of length 5 instead of array with one element that is 5
let newArrayInstanceWithValue = new Array(5);

// Array.of() - This will create Array of length with of(value)
let ArrayOfUsuage = Array.of(5);

// Array.from() - Creates new array instance from other array 
const modifiedCopy = Array.from([1, 2, 3, 4, 5, 6, 7, 8], number => number * 3);


// Array.find() - returns only first match
let companies = [{
    name: 'name1',
    age: 3
}, {
    name: 'name2',
    age: 4
},
{
    name: 'name1',
    age: 3
}]
const employees = companies.find((employe) => {
    if (employe.name.includes('name1')) {
        return true;
    }
});

// Array.findIndex() - returns only first match Index value
const employeesIndex = companies.findIndex((employe) => {
    if (employe.name.includes('name2')) {
        return true;
    }
});

// Array.filter() -> returns list of matching elements in an array
const employeesFilter = companies.filter((employe) => {
    if (employe.name.includes('name1')) {
        return true;
    }
});

// Array.fill() - prefills values
const checkboxes = new Array(5).fill(false);

// Array.forEach() - Doesnt return anything
companies.forEach((employe) => {
    console.log(employe);
});

// Array.map() -> returns tranformed array
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

// Array.every() -> Checks if all elements pass some test
const isBelowThreshold = (currentValue) => currentValue < 40;

const array2 = [1, 30, 39, 29, 10, 13];

console.log(array2.every(isBelowThreshold));

// Array.some() -> Checks if atleast one element passes the test
const array3 = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array3.some(even));

// Array.splice() -> method changes the contents of an array by removing or replacing existing elements
// and/or adding new elements in place.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

/*
 The slice() method returns a shallow copy of a portion of an array into a
 new array object selected from start to end (end not included) where start
 and end represent the index of items in that array. The original array will not be modifie
*/

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value.

const array4 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array4.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array4.reduce(reducer, 5));
// expected output: 15