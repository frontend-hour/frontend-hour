// 1. Sentence Capitatisation

// Question - Write a program to capitalize the first letter of each word in the Sentence. 

//approach1
function sentenceCap(str) {
    let words = [];
    let wordsInStr = str.split(' ');
    for (let word of wordsInStr) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ');
}

//approach2
function capSentence(str) {
    let words = [];
    let wordsInStr = str.split(' ');
    for (let word of wordsInStr) {
        let [first, ...rest] = word.split('')
        debugger
        words.push((first.toUpperCase() + rest.join('')))
    }
    return words.join(' ');
}


//approach3
function capSentence(str) {
    let words = '';
    let wordsInStr = str.split(' ');
    for (let word of wordsInStr) {
        let [first, ...rest] = word.split('')
        words = (words ? words + ' ' : '') + (first.toUpperCase() + rest.join(''))
    }
    return words;
}

// Good 


// 2. word reversal 
// Question - Given a sentence, Write a program to reverse each word in it.

function wordReversal(str) {
    let words = [];
    let wordsInStr = str.split(' ');
    for (let word of wordsInStr) {
        words.push(word.split('').reverse().join(''))
    }
    return words.join(' ');
}

// 3. Anagram Check

// What is an Anagram?

// A word is said to be an anagram of another when it can be formed by rearranging the letters of the other word using each letter just once. E.g listen is an anagram of silent.

// Question -  Write a program to check whether the two provided strings are anagrams of each other. 
// TODO 
// (Do not ignore the letter case)
// Anagram checker for sentence 

// Approach 1
// function anagrams(str1, str2) {
//     if(str1.length === str2.length) {
//         console.log('Strings given are not valid');
//     }

//     if(str1.split('').sort().join('')  === str2.split('').sort().join('')) {
//         console.log('Given strings are Anagrams')
//     }
// }


function anagramStrings(str1, str2) {
    if (str1.length !== str2.length) {
        return 'Not valid'
    }

    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');


    if (sortedStr1 === sortedStr2) {
        console.log('Given strings are anagram');
    }
    else {
        console.log('Strings are not anagrams');
    }
}



