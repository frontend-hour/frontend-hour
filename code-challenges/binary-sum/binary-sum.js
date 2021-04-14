/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if(a.length > b.length) {
        b = (new Array(a.length - b.length).fill(0).concat(b.split(''))).join('');
    } else if(b.length > a.length) {
        a = (new Array(b.length - a.length).fill(0).concat(a.split(''))).join('');
    }
    let sum = '';
    let carry = 0;
    for(let k = a.length - 1; k >= 0; k--) {
        let temp = Number(a[k]) + Number(b[k]) + carry;
        carry = 0;
        if(temp > 1) {
            carry = 1;
            temp = (temp > 2) ? 1 : 0;
        }
        sum = temp + sum;
        if(k === 0 && carry) {
            sum = carry + sum;
        }
    }
    return sum;
};
