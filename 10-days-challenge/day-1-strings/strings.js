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

        for (let permutation of findPermutations(remainingChars)) {
            permutationsArray.push(char + permutation);
        }
    }
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



