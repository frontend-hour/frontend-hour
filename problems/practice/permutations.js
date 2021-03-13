// Question - Find the permutations of the given Number 
// Can also do for String

// Approach - 

// 1. Make empty array to store result 
// 2. iterate 

function findPermutationsOfNumber(str) {
    var permuteArray = [];
    for (i = 0; i < str.length; i++) {

    }
    return permuteArray;
}

// what if the user tries to use empty string or a number??

function findPermutationsOfNumber(str) {
    if (typeof str !== 'string') {
        return 'Enter Valid String';
    }

    var permuteArray = [];
    for (i = 0; i < str.length; i++) {

    }
    return permuteArray;
}

// What if the string provided is very short ???
function findPermutationsOfNumber(str) {
    if (typeof str !== 'string') {
        return 'Enter Valid String';
    }

    if (str.length < 2) {
        return str;
    }

    var permuteArray = [];
    for (i = 0; i < str.length; i++) {

    }
    return permuteArray;
}

// Final Answer to the Given Problem

function findPermutationsOfNumber(string) {
    if (!string || typeof string !== "string") {
        return "Please enter a string"
    } else if (string.length < 2) {
        return string
    }

    let permutationsArray = []

    for (let i = 0; i < string.length; i++) {
        let char = string[i]

        // if (string.indexOf(char) != i)
        //     continue

        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

        for (let permutation of findPermutations(remainingChars)) {
            permutationsArray.push(char + permutation)
        }
    }
    return permutationsArray
}