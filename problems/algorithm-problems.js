// Palindrome 

function Palindrome(str) {
    const reversed = str.split(' ').reverse().join('');

    return str === reversed;
}

console.log(Palindrome("neveroddoreven"));

console.log(Palindrome("Amana plana canalPanama"));


// Reversing an integer

var a = 12345;
console.log(a.toString().split('').reverse().join(''));

// Max characters in a string


// Fizz Buzz Problem 
// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
for (var i = 0; i <= 100; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// Array Chunking - 
// Array chunking is a technique used to split very large arrays into smaller groups(sizes) usually for easier manipulation and presentation.

// https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/array-chunking 

// Looping Through the Number of Chunks
// This is a more concise approach to chunking(grouping) the elements of an array. Here, we use the .splice() method to extract elements of the specified size from the array that is received.

// The **.splice()** method is used to modify the content of an array by removing or replacing elements.

// It receives two parameters: the starting index and the number of elements from that point to be extracted and returned.

chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)

var chunkArray = function (array, size) {
    let result = []
    while (array.length > 0) {
        result.push(array.splice(0, size))
    }
    return result
}


// Anagrams

// What is an Anagram?

// A word is said to be an anagram of another when it can be formed by rearranging the letters of the other word using each letter just once. E.g listen is an anagram of silent.

// https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/anagrams


// Sentence Capitalization

function capSentence(sentence) {
    var words = [];
    for (let word of sentence.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ');
}

console.log(capSentence('raghu rami reddy'));
//"Raghu Rami Reddy"


// Also find another article below 
// https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/sentence-capitalization


function reverseStr(str) {
    let a = str.split('');
    a.map((item) => item.split('').reverse().join());

}
