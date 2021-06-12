/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    
    let temp = {};
    
    for(let i = 0; i < arr.length; i++) {
        if(temp.hasOwnProperty(arr[i])) {
            temp[arr[i]] += 1;
        } else {
            temp[arr[i]] = 1;
        }
    }
    let result = [];
    Object.keys(temp).forEach((key) => {
        if(key == temp[key]) {
            result.push(key);
        }
    });
    if(result.length) {
        return result.sort((a, b) => b - a )[0];
    }
    return -1;
};
