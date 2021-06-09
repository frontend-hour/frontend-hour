/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let list = [];
    for(let i = left; i <= right; i++) {
        if(checkSelfDivisible(i)) {
            list.push(i);
        }
    }
    return list;
};

function checkSelfDivisible(num) {
    let strNum = String(num).split('');
    for(let i = 0; i < strNum.length; i++) {
        if(num % Number(strNum[i]) !== 0) {
            return false;
        }
    }
    return true;
}
