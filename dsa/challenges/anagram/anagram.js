// Approach 1
function anagrams(str1, str2) {
    if (str1.length === str2.length) {
        console.log('Strings given are not valid');
    }

    if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
        console.log('Given strings are Anagrams')
    }
}

// More detailed way
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