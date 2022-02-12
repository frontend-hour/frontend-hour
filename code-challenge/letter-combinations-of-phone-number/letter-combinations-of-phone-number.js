/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result = [];
    const digitMap = {
        '2' : ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    
    function backTrack(index, combinationStr) {
        if(combinationStr.length === digits.length) {
            result.push(combinationStr);
            return;
        }
        let currentTarget = digitMap[digits[index]];
        for(let i = 0; i < currentTarget.length; i++) {
            backTrack(index + 1, combinationStr + currentTarget[i]);
        }
    }
    if(!digits)
        return [];
    backTrack(0, "");
    return result;
};
