// Question -- Given an array of unique characters and a string, write a program to find the smallest substring of the given string which contains all the characters of the array.

// input:
//     arr = [a, b, c]
//     str = "abyuxabyteqaebczt"
// output: "aebc"


function smallestSubstring(array, str) {
    let substring = '';
    let temp = [];

    for (let i of str) {
        if (temp.length === array.length) {
            return substring;
        }
        if (array.includes(i)) {
            if (temp.includes(i)) {
                substring = '';
                temp = [];
            }
            substring = substring + i;
            temp.push(i);
        } else {
            if (temp.length === array.length) {
                return substring;
            }
            debugger
            substring = substring ? substring + i : substring;
        }
    }
    return (temp.length === array.length) ? substring : 'Not a match in Given string';
}

smallestSubstring(['a', 'b', 'c'], "abyuxabyteqcaebczt");
