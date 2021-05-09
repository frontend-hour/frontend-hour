## Cognitive Scale Questions

> 1. Find the first non-repeating element in a given array of integers.

```
Input : [-1, 2, -1, 3, 2]
Output : 3

Explanation : The first number that does not repeat is : 3
Input : [9, 4, 9, 6, 7, 4]
Output : 6
```
```javascript
// Answer
function findUnique(nums) {
  let temp = {};
  for(let i = 0; i < nums.length; i++) {
    if(temp.hasOwnProperty(nums[i])) {
      temp[nums[i]] += 1;
    } else {
       temp[nums[i]] = 1;
    }
  }
  console.log(temp);
  let result;
  Object.keys(temp).forEach((key) => {
    console.log(key, temp[key]);
    if(temp[key] === 1) {
      result = Number(key);
    }
  });
  return result;
}

findUnique([-1, 2, -1, 3, 2]);
```


> 2. Find the largest and smallest number in an unsorted integer array

```
array : [-20, 34, 21, -87, 92, 221]

Largest number in array is : 221
Smallest number in array is : -87

array : [1, -1, 0, 1]

Largest number in array is : 1 
Smallest number in array is : -1
```
```javascript
// Answer
function MaxMin(array) {
  let small = array[0];
  let large = array[0];
  
  for(let j = 1; j < array.length; j ++) {
    if(array[j] > large) {
      large = array[j];
    }
    if(array[j] < small) {
      small = array[j];
    }
  }
  
  console.log(small, large);
}

MaxMin([-20, 34, 21, -87, 92, 221]);
```


> 3. Object intersection

```
Input:
const obj1 = {
    x: 0,
    y: 1,
    z: 2,
    a: 10,
}

const obj2 = {
    x: 10,
    y: 1,
    z: 22,
}

Output: { y: 1 }
```
```javascript
// Answer
let k = {};
Object.keys(obj2).forEach((key) => {
  console.log(key);
  if(obj1.hasOwnProperty(key) && obj2[key] === obj1[key]) {
    k[key] = obj2[key];
  }
});
console.log(k);
```

> 4 async & await

```javascript
const peoples = [1,2,3,4,5];

const url = `https://swapi.dev/api/planets/${peoples[i]}/`;

const peopleNames = ['Name 1', 'Name 2' ...];

async function  getDetials(peoples) {
  if(Array.isArray(peoples)) {
    for(let i = 0; i < peoples.length; i++) {
      let result = await fetch(`https://swapi.dev/api/planets/${peoples[i]}/`).then((response) => response.json())
  .then((json) => console.log(json));
      console.log(result);
    }
  }
}
getDetials([1,2,3,4,5]);
```

> 5. Given an input string of a certain length, design an algorithm that compresses the string.The string should be compressed such that consecutive duplicates of characters are replaced with the character and followed by the number of consecutive duplicates.

```
For example, if the input string is “wwwwaaadexxxxxx”, then the function should return “w4a3dex6”.
```

```javascript
function duplicatesCount(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++
        } else {
            obj[str[i]] = 1;
        }
    }

    let str1 = '';
    Object.keys(obj).forEach((key) => {
        str1 += `${key}${obj[key]}`
    })
    console.log(obj, str1);
    return str1;
}

console.log(duplicatesCount('wwwwaaadexxxxxx'))
```

> 6. URLify Given a string, replace all spaces with the characters '% 20'.

```
const str = 'ab cd ef ';
output -> 'ab%20cd%20ef'
```

```javascript
function URLify(str) {
    return str.trim(' ').split(' ').join('%20');
    let modifiedStr = str.split(' ');
    let output = [];
    for (let i = 0; i < modifiedStr.length; i++) {
        output.push(modifiedStr[i])
        output.push('%20');
    }
    return modifiedStr.join('%20');
}

console.log(URLify('ab cd ef '));
```

> 7. What is Critical rendering path!?
> Ans: TBT

> 8. How can I catch error using Async and Await ?

> 9. componentwillreceiveprops - Hooks equivalent???

> 10. Explain CSS object Modal - How it co-ordinates or interacts with HTML DOM?

> 11. Difference between - display:"none" / visibility:"hidden"

## Factset

> 1. Data types in Javascript?

> 2. Object cloning, freezing, seal, freezing only one property?

```javascript
const Obj = {
  x: 1,
  y: 2,
  z: { x : 1, y: claculateScore() {} }
}

// copying object
let Obj2 = { ...Obj } 
Object.assign()
JSON.stringfy()
```

> 3. Scope problem

```javascript
function a() {
  var z = 4; 
  {
    console.log(z);
    let z = 56;
  }
}
```

> 4. Object extends

```javascript
let Object2 = Object.create(Obj)

Object2 = {
    proto: {
        x: 1,
        y: 2,
        z: { x : 1, y: claculateScore() {} }
    }
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayName = function () {
  return this.firstName + ' ' + this.lastName;
}

function Employee(firstName, lastName, id) {
  Person.call(this, firstName, lastName);
  Office.call(this, officeName);
  this.id = id;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getSalary = function () {
  return this.id;
}
```

> 5. Problem on objects

```javascript
let arr1 = [1,11,2,4,44,55];
arr1.sort(); // ascending order

let arr2 = [{ id: 89}, { id: 45}, ...];
let uniqueArr2 = [];
let ids = [];
for(let i = 0; i < arr2.length; i++) {
  if(!ids.includes(arr2[i].id)) {
    ids.push(arr2[i].id);
      uniqueArr2.push(arr2[i]);
  }
}
```

> 6. In what way arrow function is different?

> 7. All about Promises, .all()...

> 8. SCSS -> Difference between .extends and includes

> 9. SCSS -> %color variables

## Quolum

1. Write a function to perform in-place reversal of words in JS and execute it as:

```
console.log(reverseWords("Welcome to Quolum Interview!"));
output: - emocleW ot mulouQ!weivretnI
```

```javascript
// Solution 1
function reverseWords(str) {
    let strArr = str.split(' ');
    let words = [];
    for (let word of strArr) {
        words.push(word.split('').reverse().join(''));
    }
    return words.join(' ');
}

// Solution 2
function reverseWords(str) {
    return str.split(' ').map(item => item.split('').reverse().join('')).join(' ');
}
```

> 2. add(2)(3)...() Write a function that adds up all the arguments passed in subsequent invocations and returns result when argument is empty

>  https://www.thatjs.dev/post/sum1234-n-frontend-javascript-interview-question-ae2fa85f8a37d6dbfa116fc128ddf834/

```js
const sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
};

console.log(sum(1)(2)(3)(4)(5)(6)()); //10
```

> 3. Hositing problem

```js
function outer() {
    var outer = 'outer';
    function outer() {
        console.log(outer);
    }
    outer();
}

outer();
```

> 4. Scope and Event loop problem

```js
for (i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 10);
}

i = 10;
// prints 10 times
```

## Service Now

> 1. Write a function that checks equality for primitive and referential data types

```
checkEquality({ x: 1, y: 9 }, { y: 9, x: 1 });
checkEquality([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]);
checkEquality('raghu', 'raghu');
checkEquality(676767, 676767);
```

> 2. Number Pair - Complete this with (m+n) time complexity

```
[1,2,3,4,5,6,7,8,9] => 8
```

> 3. System Design question 
- Blog database design 
- Self relations tables

> 4. How to center align a Square using CSS?

```css
.square {
    width: 100px;
    height: 100px;
    background-color: red;
}

body {
    display: flex;
    justify-content: space-between;
}
```

## Tekion

> 1. Write a class representation in Javascript without using class keyword? 

- Follow up - new keyword explanation

> 2. Hoisting - Temporal dead zone

```js
var counter = 0;
var fun = function () {
    counter++;
    // Value of counter  
    let counter = 10;
}
fun();
```

> 3. This keyword

```js
var firstName = 'Abhishek';
var lastName = 'Aggarwal';
var personObj = {
    firstName: 'Raghu',
    lastName: 'Reddy',
    getFullName: () => {
        return this.firstName + ' ' + this.lastName;
    }
}
let newFunc = personObj.getFullName;
newFunc(); //  Abhishek Agarwal 
personObj.getFullName(); //  Abhishek Agarwal 
personObj.getFullName.call(window); //  Abhishek Agarwal 
newFunc.bind(personObj)(); //  Abhishek Agarwal 
```

> 4. Debounce
- The main difference between Throttle and Debounce is that throttling executes the function at a regular interval, while debouncing executes the function only after some cooling period. 
- Both throttling and debouncing can be implemented with the help of the setTimeout function.

```js
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

// So, Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in "execute this function only if 1000 milliseconds have passed without it being called."

function keyUpEvent(e) {
    debouncePrintName(e.target.value)
}
```

> 5. Array Flat with reduce

```js
function flatten(list) {
    return list.reduce(function (flattenArray, item) {
        return flattenArray.concat(Array.isArray(item) ? flatten(item) : item);
    }, [])
}

flatten([1, 2, [3, 4, [5, [6]]], 7, 0]); // [1, 2, 3, 4, 5, 6, 7, 0]
```

> 6. Create a promise API similar to native Promise Object

```js
// TODO: Refactor and needs some corrections
var promise = new Promise((resolve, reject) {
    setTimeout()
});

class ownPromise {
    constructor() {
        this.value = null;
        this.fullfilled = function (resolve, reject) {
        };
        this.rejected = [];
    }
    then(cb) {
        cb(this.value);
    }
    resolve(value) {
        this.value = value;
    }
    reject(error) {
        throw `error`;
    }
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0);

Promise.resolve()
    .then(function () {
        console.log('promise1');
    })
    .then(function () {
        console.log('promise2');
    });

console.log('script end');
```
> 7. Implement a stop watch timer in React JS (20 mins time)

> 8. System Design: Create a Middleware that caches the api response of already existing response data

```js
// Given

const sampleRequest = (ids) => {
	console.log('requested for', ids);
  return new Promise((resolve, reject) => {
    if (!Array.isArray(ids)) {
      reject(new Error('fail'));
    }
    const response = ids.reduce((acc, id) => {
      acc[id] = `${id}_test`
      return acc;
    }, {});
    setTimeout(() => {
      resolve(response);
    }, 1000);
  })
}

sampleRequest([1,2,3]).then(r => console.log(r));
setTimeout(() => {
	sampleRequest([1,2,3,4,5]).then(r => console.log(r));
}, 2000);
```

```js
//Solution
function middleware(sampleResponse) {
    let responseStore = {}; 

    return function (ids) {
        if(Array.isArray(ids)) {
            let getDataIds = [];
            ids.forEach((id) => {
                if(!Object.keys(responseStore).includes(id)) {
                    getDataIds.push(id);
                }
            });
            return new Promise((resolve, reject) => {
                sampleResponse(getDataIds).then(r => {
                    responseStore = [...r, ...responseStore];
                    resolve(responseStore);
                });
            })
        }
    }
}
```
#### Discussion & Transcript
- How do you Invalidating Cache
- On what Criteria Cache will be cleared.
- I will add time stamp when storing in store
- sorted based on time stamp in store
- Based on time ciriteria of data, I will set expiry flag to data
And check the flag with time
Actual time
When accessed the data in store
- There has to be timer that cleans based expiry
- It should run always again problem
- some time slots - based on that I will clear memory which expiried
- Based on the browser memory I will define the slots
- How often it slows with meory growth
- Based on data size in store  - these are not questions
- How often data s cached - these are not questions to him
- I will define the time slots based on data size and how often data is cached

> 9. Call Apply Bind

```js
let sqaure = {
    x: 4,
    getArea: function() {
        return this.side * this.side;
    }
}

let sqaure2 = {
    side: 5
}

sqaure.getArea.call(sqaure2)

// add parameters to above

let sqaure = {
    x: 4,
    getArea: function(a, b) {
        return this.side * a * b;
    }
}

let sqaure2 = {
    side: 5
}

sqaure.getArea.call(sqaure2, 2 ,3);
```

> 10. Write polyfill for Bind

```js
Function.prototype.mybind = function () {
    const context = this;
    const boundContext = arguments[0];
    const boundArguments = Array.from(arguments).slice(1);

    if (typeof context !== 'function') {
        throw new TypeError('Not a valid function.')
    }
    return function () {
        const allArgs = boundArguments.concat(Array.from(arguments));
        context.apply(boundContext, allArgs);
    }
}

let sqaureBind = sqaure.getArea.bind(sqaure2);
```

## Tesco

> 1. What is CSRF 
- https://www.appsecmonkey.com/blog/csrf
- https://owasp.org/www-community/attacks/csrf

> 2. What is ClickJacking ? 
- https://www.appsecmonkey.com/blog/clickjacking 

> 3. Why Git rebase over Git merge. 

> 4. React Virtual dom? What alogrithm it uses.

> 5. SEO 

> 6. CSS Box Model 

## Phenom People

```js
// Random questions List

let questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];

function generateRandomQuestionOrder(list) {
    let randomList = [];

    while (randomList.length !== list.length) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!randomList.includes(list[randomNumber])) {
            randomList.push(list[randomNumber]);
        }
    }
    return randomList;
}

console.log(generateRandomQuestionOrder(questions));

// Group times based on date
let input = [
    {
        date: '24 th July',
        time: '1-2'
    },
    {
        date: '24 th July',
        time: '2-3'
    },
    {
        date: '25 th July',
        time: '1-2'
    },
    {
        date: '25 th July',
        time: '1-2'
    },
    {
        date: '25 th July',
        time: '2-3'
    },
    {
        date: '26 th July',
        time: '1-2'
    }
];

function getTimesOfDay(list) {
    let temp = {};
    for (let i = 0; i < list.length; i++) {
        if (!temp[list[i].date]) {
            temp[list[i].date] = [];
        }
        if (temp[list[i].date]) {
            temp[list[i].date].push(list[i].time);
        }
    }
    console.log(temp);
}

getTimesOfDay(input);

// Object concepts
let obj = {
    name: 'my-name',
    sayName: function () {
        return this.name;
    }
}

obj.sayName(); // ? my-name
obj.sayName.call({ name: 'new-name' }); // new-name

let newObj = obj.sayName;
var name = 'Tim';

newObj(); // Tim

// Array Flat
let arr = [1, 2, [4, 5], 4, 5, 6, [1, 2, [3, 4, 6, [7, 8, 8]]]];
```

## Sapient

```js
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(this.name + "is Walking");
}
function Dog(name, color) {
    Animal.call(this, name)
    this.color = color;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
    console.log(this.name + "is Barking");
}

let dog = new Dog('bruce', 'red');

dog = {
    name: 'bruce',
    color: 'red',
    __proto__: {
        bark: function () {
            console.log(this.name + "is Barking");
        },
        __proto__: {
            walk: function () {
                console.log(this.name + "is Walking");
            }
        }
    }
}

dog.walk();
dog.bark();

// ------------------------------------------------------------

let Obj = {
    name: 'sapient',
    sayName: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 0)
    }
}

Obj.sayName();
```

## Wells Fargo

> 1. Check if an array sorted or not
> 2. If sorted Ascending or descending order

## Oracle
> 1. Impliment a power function that can take negative values as in exponent place

```js
function power(base, exp) {
  let total = 1;
  let sign = false;
  if(exp < 0) {
    sign = true;
    exp = exp * -1;
  }
  return sign ? 1/total : total;
}
console.log(power(2, -3));
```

> 2. Impliment the same using recursion

```js
function power(base, exp) {
  return exp === 0 ? 1 : base * power(base, --exp);
}
```

> 3. How do measure performance of a web page
> 4. For a customer page speed redcued, idenfity the problem

> 5. There hundred balls one ball is defective in these balls
> All balls are manufactured equal in weight, but the defective ball weigh less
```
100 balls
1 defective ball - weight less
given one common balance to indenfy the defective ball
In how many steps can you impliment the steps to weight 
```

```
50 - 50 - 1
25 - 25 - 2
12 - 12 - 3 // 1 ball
6 - 6 - 4
3 - 3 - 5
1 - 1  - 6 // 1 ball
```

> 6. Design cache for Factorial using Memorization

```js
function factorialCreator() {
  let cache = {};
  
  return function factorial(n) {
    if(cache.hasOwnProperty(n)) {
      console.log('Returned from Cache')
      return cache[n];
    } else {
      let total = 1;
      for(let i = 1; i <= n; i++) {
        total = total * i;
      }
      cache[n] = total;
      console.log('Returned from Function')
      return total;
    }
  }
}

let fact = factorialCreator();

console.log(fact(3));
console.log(fact(3));
```

> 7.  Memorization iterator

```js
function iterator(array) {
  let counter = 0;
  return function next() {
    return array[counter++];
  }
}

let newItr = iterator([1,2,3,4]);

console.log(newItr());
console.log(newItr());
console.log(newItr());
```

> 8. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.Note that you must do this in-place without making a copy of the array.
```js
// Question
Exercise 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
Input: nums = [0]
Output: [0]
 
Constraints:
• 1 <= nums.length <= 10^4
• -2^31 <= nums[i] <= 2^31- 1
```

```js
// Solution
function zeroBack(nums) {
  let length = nums.length;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
    }
  }
 
}

zeroBack([0,1,0,3,12]);
```

> 9. Apending SVG to div

```js
var svg = document.getElementById('svg');
var div = document.getElementById('div');
div.append(svg);
```

> 10. Registering a custom event

```js
const event = new Event('mycuston')
ele.eventListener('onChange', () => {})
ele.dispacthEvent(event);
```

> 11. Hoisting Example

```js
x();

function x() {
  let h = 0;
  
  return function y() {
    let u = 0;
    console.log(h)
  }
}

let p = x();

let x = 0;

console.log(square(5));

var square = function(n) {
  return n * n;
}
```

> 12. Event loop
> 13. Cross Browser
> 14. Call by value & call by reference
> 15. Linked list
> 16. Delete a node creatively when only one node is given (Ans: Change the current node to next and leave next node)
> 17. What is a data structure and types of data structure
> 18. JOINS in sql SELECT * FROM EMPLOYES, DEPARTMENTS

## Nike

1. Reverse a String

```js
Input:
1234
7463847412
2147483647
-1
1-
.ABC.

Output:

4321
2147483647
OUT OF BOUNDS
INVALID INPUT
-1
INVALID INPUT
```

> 2. Number pairs

```js
// Programming challenge description:
// You are given a sorted array of positive integers and a number X.
// Print out all pairs of numbers whose sum is equal to X. 
// Print out only unique pairs and the pairs should be in ascending order
// Input:
// Your program should read lines of text from standard input.
// Each line will contain a comma separated list of sorted numbers,
// followed by a semicolon, followed by the integer X.
// Output:
// For each line of input, print to standard output the pairs of numbers that sum to X. Print the pairs in ascending order (the first number of each pair should be less than or equal to the second number). If no pair exists that sums to X, print the string NULL.
// Test 1
// Test Input
// Test 1 Input
// 1,2,3,4,6;5
// Expected Output
// Test 1 Input
// 1,4;2,3
// Test 2
// Test Input
// Test 2 Input
// 2,4,5,6,9,11,15;20
// Expected Output
// Test 2 Input
// 5,15;9,11
// Test 3
// Test Input
// Test 3 Input
// 1,2,3,4;50
// Expected Output
// Test 3 Input
// NULL

let arr = [2, 4, 5, 6, 9, 11, 15];
let x = 20;

let pairs = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === x) {
            let pair = arr[i] > arr[j] ? `${arr[j]},${arr[i]}` : `${arr[i]},${arr[j]}`;
            pairs.indexOf(pair) == -1 && pairs.push(pair);
        }
    }
}

console.log(pairs);

// Other solution 
function numberPairs(str) {
    let formattedStr = str.split(';');
    let arr = formattedStr[0];
    let x = formattedStr[formattedStr.length - 1];

    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === x) {
                let pair = arr[i] > arr[j] ? `${arr[j]},${arr[i]}` : `${arr[i]},${arr[j]}`;
                pairs.indexOf(pair) == -1 && pairs.push(pair);
            }
        }
    }
}

numberPairs('2,4,5,6,9,11,15;20');

// Added another type of Asking the same question -

// Pair Sum N
// Question – Given a sorted array of integers and a number num, write a function pairSumN which returns the first pair of integers whose sum equals to the given number num, return an empty array if the pair does not exist

// Example

// input: arr = [-3, -2, -1, 0, 1, 2, 3], num = 0
// output: [-3, 3]

// input: arr = [-1, 4, 5, 5, 6, 7, 8], num = 10
// output: [4, 6]

// input; arr = [1, 2, 3, 4, 5, 6], num = 20
// output: []

function pairSumNumbers(array) {
    var pairNum = [];
    var num = 10
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === num) {
                pairNum.push(array[i], array[j])
                return pairNum;
            }
        }
    }
    return pairNum;
}

```
