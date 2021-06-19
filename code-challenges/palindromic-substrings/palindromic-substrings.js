/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        for(let j = s.length; j >= 0; j--) {
            let sub = s.substr(i, j - i);
            if(sub && checkPalindrome(sub)) {
                count += 1;
            }
        }
    }
    return count;
};

function checkPalindrome(str) {
    return str === str.split('').reverse().join('');
}
