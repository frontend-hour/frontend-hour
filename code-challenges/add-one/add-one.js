var plusOne = function(digits) {
    let carry = 0;
    let sum = '';
    for(let k = digits.length - 1; k >= 0; k--) {
        let temp;
        if(k === (digits.length - 1)) {
            temp = (Number(digits[k]) + 1);
        } else {
            temp = (Number(digits[k]) + carry);
            carry = 0;
        }
        if(temp > 9) {
            carry = Number(String(temp)[0]);
            sum = String(temp)[1] + sum
        } else {
            sum = temp + sum;
        }
        if(k === 0 && carry) {
            sum = carry + sum;
        }
    }
    return sum.split('');
};
