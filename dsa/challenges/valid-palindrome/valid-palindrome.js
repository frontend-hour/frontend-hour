/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let regex = /[A-Za-z0-9]/
    let plain = '';
    s = s.toLowerCase();
    for(let i = 0; i< s.length;i++) {
        if(s[i].match(regex)) {
            plain+=s[i];
        }
    }
    return plain === plain.split('').reverse().join('');
};
