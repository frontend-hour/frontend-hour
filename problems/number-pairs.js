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

let i1 = [1, 2, 3, 4, 5, 6];
let x = 5;

let pairs = [];
for(let i = 0; i < i1.length; i++) {
    for(let j = 0; j < i1.length; j++) {
        if(i1[i]+i1[j] === x) {
            let pair = i1[i] > i1[j] ? `${i1[j]},${i1[i]}` : `${i1[i]},${i1[j]}`;
            if(pairs.indexOf(pair) == -1) {
                pairs.push(pair);
            }
        }
    }
}

console.log(pairs);

