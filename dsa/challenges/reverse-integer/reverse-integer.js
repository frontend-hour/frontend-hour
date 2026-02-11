var reverse = function (x) {
    let reveredArray = String(x).split('').reverse().join('');
    let result = parseInt(reveredArray) * Math.sign(x);
    if (result < (Math.pow(2, 31) * -1) || result > Math.pow(2, 31) - 1) return 0;
    return result;
};