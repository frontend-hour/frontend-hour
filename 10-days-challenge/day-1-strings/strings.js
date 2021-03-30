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

// How to convert long number into abbreviated string in JavaScript ?