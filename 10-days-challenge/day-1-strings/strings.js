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
    if(typeof inputString !== 'string') {
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

