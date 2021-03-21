// Number Pairs: 
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