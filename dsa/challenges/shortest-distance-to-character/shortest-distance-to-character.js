/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    let r = [];
    let ocr = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) {
           ocr.push(i);
        }
    }
    for(let i = 0; i < s.length; i++) {
        let min = [];
        for(let j = 0; j < ocr.length; j++) {
            min.push(Math.abs(ocr[j] - i));
        }
        r.push(Math.min(...min));
    }
    return r;
};
