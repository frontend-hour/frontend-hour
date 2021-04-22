/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let multiples = 1;
    while(multiples <= n) {
        if(multiples === n) {
            return true;
        }
        multiples = multiples * 3;
    }
    return false;
}

// Second Solution
var isPowerOfThree = function (n) {
    console.log(n.toString(3));
    return n.toString(3).split("").reduce((prev, curr) => parseInt(prev) + parseInt(curr)) == 1;
};


// n.toString(3) uses the concept of radix and makes number n into a string with a base of 3, a ternary number
// So if n was a power of 3, n.toString(3) would be 1, 10, 100, or 10...0 .
// use split() to make the string into an array
// use reduce() to count the total of each digit
// if the total is equal to 1, the number n is a power of 3
