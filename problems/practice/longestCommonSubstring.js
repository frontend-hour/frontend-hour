// Question – Given two strings, write a program to find the longest string that is a substring of both the given strings.

// Example
// input: str1 = "abcdefg", str2 = "xyabcz"
// output: "abc"

// input: str1 = "XYXYXYZ", str2 = "XYZYX"
// output: "XYZ"

function longestCommonSubstring(str1, str2) {
    var longestStr = '';
    var str;
    var k = 1;
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                str = str1[i];
                while ((i + k < str1.length) && (j + k < str2.length) && (str1[i + k] === str2[j + k])) {
                    str += str1[i + k];
                    ++k;
                }
                if (str.length > longestStr.length) {
                    longestStr = str;
                }
            }
        }
    }
    return longestStr;
}


// function longestCommonSubstring(a, b) {
//     var longest = "";
//     // loop through the first string
//     for (var i = 0; i < a.length; ++i) {
//         // loop through the second string
//         for (var j = 0; j < b.length; ++j) {
//             // if it's the same letter
//             if (a[i] === b[j]) {
//                 var str = a[i];
//                 var k = 1;
//                 // keep going until the letters no longer match, or we reach end
//                 while (i + k < a.length && j + k < b.length // haven't reached end
//                     && a[i + k] === b[j + k]) { // same letter
//                     str += a[i + k];
//                     ++k;
//                 }
//                 // if this substring is longer than the longest, save it as the longest
//                 if (str.length > longest.length) { longest = str }
//             }
//         }
//     }
//     return longest;
// }