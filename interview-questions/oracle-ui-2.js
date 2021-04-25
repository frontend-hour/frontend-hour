
// Design cache for Factorial using Memorization
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

// Memorization iterator

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

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
 
// Exercise 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]
 
// Constraints:
// 	• 1 <= nums.length <= 10^4
// 	• -2^31 <= nums[i] <= 2^31- 1

    
function zeroBack(nums) {
  let length = nums.length;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
    }
  }
 
}

zeroBack([0,1,0,3,12]);

// Apending SVG to div
var svg = document.getElementById('svg');

var div = document.getElementById('div');
div.append(svg)


// Registering a custom event
const event = new Event('mycuston')
ele.eventListener('onChange', () => {})
ele.dispacthEvent(event);

// Hoisting Example

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

