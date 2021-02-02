var array1 = [1, 2, 3, 4, 5, 6, 6, 3, 4, 2, 1, 4, 5, 5, 5, 5, 6, 6, 6, 6];

// Using spread ES6Array() operator 
var unique1 = [...new Set(array1)];

console.log('Unique1 ->', unique1);


// Using Array.from function
var unique2 = Array.from(new Set(array1));

console.log('unique2', unique2);