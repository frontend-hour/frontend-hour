/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    for(let i= 0; i < strs.length; i++) {
        let sortedWord = strs[i].split('').sort().join('');
        if(!map.hasOwnProperty(sortedWord)) {
            map[sortedWord] = [];
        }
        map[sortedWord].push(strs[i]);
    }
    let r = [];
    for(let key in map) {
        r.push(map[key]);
    }
    return r;
};
