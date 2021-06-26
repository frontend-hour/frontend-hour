//TODO: Not working for more than 2 digit inputs
// Work in Progress

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let phoneKeyPad = {
        2 : 'abc',
        3 : 'def',
        4 : 'ghi',
        5 : 'jkl',
        6 : 'mno',
        7 : 'pqrs',
        8 : 'tuv',
        9 : 'wxyz'
    }
    
    if(digits.length) {
        if(digits.length === 1) {
            return [...phoneKeyPad[digits]];
        } else {
            let s = [];
            for(let i = 0; i < digits.length; i++) {
                s.push(phoneKeyPad[digits[i]]);
            }
            let r = [];
            for(let j = 0; j < s.length; j++) {
                for(let k = 0; k < s[j].length; k++) {
                    for(let i = 0; i < s.length; i++) {
                        if(j !== i) {
                            console.log(s[j][k], s[i]);
                            for(let p = 0; p < s[i].length; p++) {
                                if(!r.includes(s[j][k] + s[i][p]) && !r.includes(s[i][p] + s[j][k]))
                                r.push(s[j][k] + s[i][p]);
                            }
                        }
                    }
                }
            }
            console.log(r);
            return r;
        }
    } else {
        return [];
    }
};
