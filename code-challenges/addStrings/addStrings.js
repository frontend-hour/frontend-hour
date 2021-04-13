// Add Solution
// Incomplete solution - 
var addStrings = function (num1, num2) {
    let numStr1 = num1.split('').reverse();
    let numStr2 = num2.split('').reverse();
    let carry = 0;
    let result = '';

    for (let i = 0; i < numStr1.length; i++) {
        let sum = Number(numStr1[i]) + Number(numStr2[i]) + carry;
        if (sum > 9) {
            carry = String(sum).charAt(0)
        }
        // sum = Number(carry) ? result.concat(String(sum).charAt(1) + Number(carry)) : result.concat(numStr1[i]+numStr2[i]);
    }
    return sum;
};