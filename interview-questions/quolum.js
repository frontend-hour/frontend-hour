

// Write a function to perform in -place reversal of words in JS and execute it as:
// console.log(reverseWords(“Welcome to Quolum Interview!”));
// Expected console output: - emocleW ot mulouQ!weivretnI

function reverseWords(str) {
    let strArr = str.split(' ');
    let words = [];
    for (let word of strArr) {
        words.push(word.split('').reverse().join(''));
    }
    return words.join(' ');
}

function reverseWords(str) {
    return str.split(' ').map(item => item.split('').reverse().join('')).join(' ');
}



/******************/


// add(2)(3) = 5 
// add(2)(3)...()

function add(num) {
    var number = num;
    return function (num1) {

        if (!num) {
            return number + num1;
        }
    }
};
add(2)(2)


// correct - need to correct
function add(num1) {
    if (num1) {
        return function (num2) {
            return add(num2)
        }
    } else {
        return num2;
    }
}

add(1)(2)(3)(4)(5)(6)();

// TO:DO - Addition
function add(num1) {
    return function (num2) {
        return num1 + add(num2);
    }
}


// Correct solution 

const sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
};

console.log(sum(1)(2)(3)(4)(5)(6)()); //10

// src - https://www.thatjs.dev/post/sum1234-n-frontend-javascript-interview-question-ae2fa85f8a37d6dbfa116fc128ddf834/

/******************/

function outer() {
    var outer = 'outer';
    function outer() {
        console.log(outer);
    }
    outer();
}

outer();


/******************/



for (i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 10);
}


i = 10;
// prints 10 times

