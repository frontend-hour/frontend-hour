/**
 * @param {number} n
 * @return {boolean}
 */
let cache = [];
var isHappy = function(n) {
    let digits = String(n).split('');
    console.log(digits);
    let sum = 0;
    for(let i = 0; i < digits.length; i++) {
        sum += (Number(digits[i]) * Number(digits[i]))
    }
    
    console.log(sum);
    if(cache.includes(sum)) {
        return false;
    } else {
        cache.push(sum);
    }
    if(sum !== 1) {
        return isHappy(sum);
    } else {
        return true
    }
};
