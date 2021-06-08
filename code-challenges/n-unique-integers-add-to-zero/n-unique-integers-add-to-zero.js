/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let r = [];
    if(n % 2 !== 0) {
        r.push(0);
    }
    for(let i = 1; i <= n/2; i ++) {
        r.push(-i);
        r.push(i);
    }
    console.log(r);
    return r;
};
