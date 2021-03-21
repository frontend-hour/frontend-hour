## Anagram Check

### What is an Anagram?

> A word is said to be an anagram of another when it can be formed by rearranging the letters of the other word using each letter just once. E.g listen is an anagram of silent.

> Write a program to check whether the two provided strings are anagrams of each other.

```javascript
// Approach 1
function anagrams(str1, str2) {
    if(str1.length === str2.length) {
        console.log('Strings given are not valid');
    }

    if(str1.split('').sort().join('')  === str2.split('').sort().join('')) {
        console.log('Given strings are Anagrams')
    }
}

// Approach 2
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
```