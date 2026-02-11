/**
 * Find two numbers in an array that add up to a target sum
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @return {number[]} - Indices of the two numbers
 */

// Approach 1: Brute Force - By Raghu Ram Reddy

// Intuition

// The simplest approach is to check each pair of numbers to see if they add up to the target sum. 
// This is a brute-force approach that checks all possible pairs of numbers in the array.

// Algorithm

// We can use two nested loops to iterate through each pair of numbers in the array. For each pair, 
// we check if their sum equals the target. If it does, we return their indices.

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]



// Approach 2: Two-pass Hash Table - Not by Raghu Ram Reddy

// Intuition

// To improve our runtime complexity, we need a more efficient way to check if the complement exists in 
// the array. If the complement exists, we need to get its index. What is the best way to maintain a 
// mapping of each element in the array to its index? A hash table.

// We can reduce the lookup time from O(n) to O(1) by trading space for speed. A hash table is well 
// suited for this purpose because it supports fast lookup in near constant time. I say "near" because 
// if a collision occurred, a lookup could degenerate to O(n) time. However, lookup in a hash table 
// should be amortized O(1) time as long as the hash function was chosen carefully.

// Algorithm

// A simple implementation uses two iterations. In the first iteration, we add each element's value 
// as a key and its index as a value to the hash table. Then, in the second iteration, we check if 
// each element's complement (target−nums[i]) exists in the hash table. If it does exist, we return 
// current element's index and its complement's index. Beware that the complement must not be nums[i] 
// itself!

function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

// Example usage:
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]


