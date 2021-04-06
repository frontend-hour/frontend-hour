// vowels

// Solution 1
function findVowelsCount(inputString) {
    if (typeof inputString !== 'string') {
        return 'Invalid input expected input of type string';
    }
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let char of inputString) {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    }
    return count;
}

let output = findVowelsCount('Chaitanya Kumar');
console.log(output);

// solution 2

function countVowel(str) {
    if (typeof str !== 'string') {
        return 'Invalid Input';
    }
    return str.match(/[aeiou]/gi)?.length;
}

// take input
// const string = prompt('Enter a string: ');

const result = countVowel('wewewewe');

console.log(result);

// ------------------------------------------------------------------------------

// How to add method to String class in JavaScript?

let codeBase = 'Frontend Hour';
let purpose = 'E learning';

String.prototype.upperCaseConcat = function (inputString) {
    return this.toUpperCase() + ' ' + inputString.toUpperCase();
}

Object.defineProperty(String.prototype,
    'sumOfLength', {
    value: function (param) {
        return this.length + param.length;
    }
});

console.log(codeBase.upperCaseConcat(purpose));
console.log(codeBase.sumOfLength(purpose));


// ------------------------------------------------------------------------------

// Given a string, write a program to return a new string with reversed order of characters.

function reverseOrderCharacters(inputString) {
    if (typeof inputString !== 'string') {
        return 'Invalid Input';
    }
    return inputString.split('').reverse().join('');
}

console.log(reverseOrderCharacters('This string will be reversed '));

// --------------------------------------------------------------------------------

// Anagram

function anagrams(str1, str2) {
    if (typeof str1 !== 'string' ||
        typeof str2 !== 'string' ||
        str1.length === str2.length) {
        return false;
    }

    if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
        return true;
    }
    return false;
}

// --------------------------------------------------------------------------------

// Palindrome

function palindrome(inputString) {
    if (typeof inputString === 'string') {
        if (inputString.split('').reverse().join('') === inputString) {
            return true;
        }
    }
    return false;
}

console.log(palindrome('racecar'));

// --------------------------------------------------------------------------------

// String Permutations

function findPermutations(string) {
    if (!string || typeof string !== "string") {
        return "Please enter a string";
    } else if (string.length < 2) {
        return string;
    }

    let permutationsArray = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length);
        console.log(char, remainingChars);
        for (let permutation of findPermutations(remainingChars)) {
            permutationsArray.push(char + permutation);
        }
    }
    console.log(permutationsArray);
    return permutationsArray;
}

console.log(findPermutations('abc'));

// --------------------------------------------------------------------------------

// Find the maximum number of times a character repeated

function maxChar(str) {
    if (!str || typeof str !== 'string') {
        return 'Invalid input';
    }
    var Obj = {};
    var max = 0;
    var maxChar = '';

    for (var i of str) {
        if (Obj[i]) {
            Obj[i]++
        } else {
            Obj[i] = 1;
        }
    }

    for (var x in Obj) {
        if (Obj[x] > max) {
            max = Obj[x];
            maxChar = x;
        }
    }
    return (maxChar);
}
console.log(maxChar('TimesofNewyork'));

//-------------------------------------------------------------------------------------

// string search

// Brute Force Search

function searchPatternInString(str, pattern) {
    for (let i = 0; i < (str.length - pattern.length) + 1; i++) {
        if (pattern[0] === str[i]) {
            let patternExist = true;
            for (let j = 1; j < pattern.length; j++) {
                if (pattern[j] !== str[i + j]) {
                    patternExist = false;
                    break;
                }
            }
            if (patternExist) {
                return i;
            }
        }
    }
    return -1;
}

// Solution 2
function stringSearch(str, pattern) {
    return str.indexOf(pattern);
}

//-------------------------------------------------------------------------------------

// one edit away

function oneEditAway(str1, str2) {
    if ((str1.length > str2.length) && (str1.length - str2.length === 1)) {
        return checking(str1, str2);
    } else if ((str1.length < str2.length) && (str2.length - str1.length === 1)) {
        return checking(str2, str1);
    } else if (str1.length === str2.length) {
        let count = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                count += 1;
            }
        }
        return count <= 1;
    }
    return false;
}

function checking(largeStr, smallStr) {
    return largeStr.split('').sort().join().includes(smallStr.split('').sort().join());
}

// ----------------------------------------


// More small examples - 

// A very common programming interview question is that given a string you need to find out the duplicate characters in the string.

// Input: “adsjfdsfsfjsdjfhacabcsbajda”

function duplicateCharacters(str) {
    let chars = {};
    for (let i = 0; i <= str.length; i++) {
        chars[str[i]] ? chars[str[i]]++ : chars[str[i]] = 1;
    }
    console.log(chars);
}

duplicateCharacters('adsjfdsfsfjsdjfhacabcsbajda');

// mirroring a string -----------------------------------------

// Input: "I evol uoy os !hcum"
// Output: I love you so much!

function reverseString(str) {
    return str.split(' ').map((item) => item.split('').reverse().join('')).join(' ');
}

reverseString('Welcome to Quolum interview')

// Sorting an array of strings by length -----------------------------------


// We are given an array of strings, we need to sort the array in increasing order of string lengths

// Input : ["You", "are", "beautiful", "looking"]
// Output : [“You", "are", "looking", "beautiful"]

let arr = ["You", "are", "beautiful", "looking"]
const asc = arr.sort((a, b) => a.length - b.length);
// const decsending = arr.sort((a,b) => b.length - a.length);
console.log(asc);
// console.log(decsending);


//--------------------------------------------------------------------
// Longest common substring 
//   Find the longest common string present in the given string 

function longestCommonSubstring(str1, str2) {
    let longestStr = '';
    let str;
    let k = 1;
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                str = str1[i];
                k = 1;
                while ((i + k < str1.length) && (j + k < str2.length) && (str1[i + k] === str2[j + k])) {
                    str += str1[i + k];
                    ++k;
                    console.log(str)
                }
                if (longestStr.length === 0 || (str.length > longestStr.length)) {
                    longestStr = str;
                }
            }
        }
    }
    return longestStr;
}

let substr = longestCommonSubstring('XYPXYXYZKREDDY', 'XYZKYXYPREDDY');
console.log(substr);

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

function longestCommonPrefix(stringsArray) {
    if (stringsArray && Array.isArray(stringsArray) && stringsArray.length) {
        let sortedByLength = stringsArray.sort((a, b) => a.length - b.length);
        let shortedLengthWord = sortedByLength.shift();
        let temp = '';
        for (let i = 0; i < shortedLengthWord.length; i++) {
            let flag = true;
            for (let j = 0; j < sortedByLength.length; j++) {
                if (sortedByLength[j][i] !== shortedLengthWord[i]) {
                    flag = false;
                }
            }
            if (flag) {
                temp = temp + shortedLengthWord[i];
            } else {
                return temp;
            }
        }
        return temp;
    }
    return "";
}
console.log(longestCommonPrefix(["flower", "flow", "flowht"]));


// another solution for Longest Common Prefix - Chaitanya - Please check once

var longestCommonPrefix = function (strs) {
    let prefix = ""
    if (strs === null || strs.length === 0) return prefix

    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i] // loop through all characters of the very first string. 

        for (let j = 1; j < strs.length; j++) {
            // loop through all other strings in the array
            if (strs[j][i] !== char) return prefix
        }
        prefix = prefix + char
    }

    return prefix
}

// refer below link for explaination!
// https://dev.to/urfan/leetcode-longest-common-prefix-with-javascript-32ca 


// Question - Write a JavaScript function to chop a string into chunks of a given length 

function strChop(str, size) {
    let fStr = str.split('');
    let choppedStr = [];
    while (fStr.length > 0) {
        choppedStr.push(fStr.splice(0, size).join(''));
    }
    return choppedStr;
}

// strChop('raghuramireddy', 3);
//  ["rag", "hur", "ami", "red", "dy"]


// Write a JavaScript function to count the occurrence of a substring in a string 

function count(str, substr) {
    let fStr = str.split(' ');
    let count = 0;
    for (let i = 0; i < fStr.length; i++) {
        if (fStr[i] === substr) {
            count++
        }
    }
    return count;
}

// count("the quick brown dog jumps over the lazy dog", 'the') 
// 2


// Write a JavaScript function to find a word within a string.

function findWord(str, word) {
    let fStr = str.split(' ');
    let words = {};
    for (let i = 0; i < fStr.length; i++) {
        words[fStr[i]] ? words[fStr[i]]++ : words[fStr[i]] = 1
    }

    for (let i in words) {
        if (i === word) {
            console.log(word + ' present in ' + words[i] + ' times');
        }
    }
}

findWord('The quick fox brown fox', 'fox');


// Problems from LeetCode 

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"

// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"

// solution - Below is the solution with BigInt approach. But need to find solution otherwise

var addBinary = function (a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};
