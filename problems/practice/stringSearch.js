// Question -- Given a text, and a pattern, find whether the given pattern exists in the text or not

/*

input: text: helloworld, substring: hello
output: 0 (index of 'h', where the substring starts)

input: text: helloworld, substring: hop
output: -1

input: text: abcrxyzgf, substring: xyz
output: 4

*/
// Approach -

// - iterate through the string by removing pattern length from string 
// - check if pattern first character is equal to iterated string value 
// - if exists ? make patternExist as Truthy 
// then iterate in pattern and check if the second character of string equal to patterns second character
// - if not make patternExist as falsy and break the loop.
// - if patternExist then return that index of String. else return -1.



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


// Solution 2 - 

function stringSearch(str, pattern) {
    return str.indexOf(pattern);
}