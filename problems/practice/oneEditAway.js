// Question – Given two strings, check whether they are one edit distance apart, i.e., if str1 and str2 are the given strings, check whether str1 can be converted to str2 with exactly one edit.

// An edit between 2 strings is one of the following operations

// Replace a character
// Add a character
// Delete a character
// Also note that two same strings are also one edit away since we can say that anyone of those strings can be converted into another by just one replace operation where we replace any of the character by itself.


// Pseudo code
// find size diff between two strings is greater than one or not.
// if greater return false, 
// iterate over largest string between the two.
// compare each and every character
// if diff greater than one return false.

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
