
// 1st Round

// Run Length Encoding:

// const { Console } = require("node:console");

// Given an input string of a certain length, design an algorithm that compresses the string.The string should be compressed such that consecutive duplicates of characters are replaced with the character and followed by the number of consecutive duplicates.

// For example, if the input string is “wwwwaaadexxxxxx”, then the function should return “w4a3dex6”.


function duplicatesCount(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++
        } else {
            obj[str[i]] = 1;
        }
    }
    // return obj;
    let str1 = '';
    Object.keys(obj).forEach((key) => {
        str1 += `${key}${obj[key]}`
        // console.log('key', key);
    })
    console.log(obj, str1);
    return str1;
}

console.log(duplicatesCount('wwwwaaadexxxxxx'))


// URLify Given a string, replace all spaces with the characters ‘% 20’.

// const str = ‘ab cd ef ‘;
// output -> ‘ab%20cd%20ef’

function URLify(str) {
    return str.trim(' ').split(' ').join('%20');
    // let modifiedStr = str.split(' ');
    // // let output = [];
    // // for (let i = 0; i < modifiedStr.length; i++) {
    // //     output.push(modifiedStr[i])
    // //     output.push('%20');
    // // }
    // return modifiedStr.join('%20');
}

console.log(URLify('ab cd ef '));


// What is Critical rendering path!?

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve('Hi there')
        , 2000)
})

promise1.then(message => {
    console.log(message);
})

// How can I catch error using Async and Await ?

// componentwillreceiveprops - Hooks equivalent???

// Explain CSS object Modal - How it co-ordinates or interacts with HTML DOM?

// Difference between - display:"none" / visibility:"hidden"
