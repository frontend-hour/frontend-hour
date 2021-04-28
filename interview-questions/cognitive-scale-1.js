// #1. Find the first non-repeating element in a given array of integers.
Input : [-1, 2, -1, 3, 2]
Output : 3
// Explanation : The first number that does not repeat is : 3
Input : [9, 4, 9, 6, 7, 4]
Output : 6

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


// #2. Find the largest and smallest number in an unsorted integer array

array : [-20, 34, 21, -87, 92, 221]

Largest number in array is : 221
Smallest number in array is : -87

array : [1, -1, 0, 1]

Largest number in array is : 1 
Smallest number in array is : -1

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


// #3. Object intersection
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
// Answer
let k = {};
Object.keys(obj2).forEach((key) => {
  console.log(key);
  if(obj1.hasOwnProperty(key) && obj2[key] === obj1[key]) {
    k[key] = obj2[key];
  }
});
console.log(k);

// #4 async await
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
