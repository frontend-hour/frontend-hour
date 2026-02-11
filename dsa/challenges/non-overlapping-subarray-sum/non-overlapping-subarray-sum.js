/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// WIP
var maxNonOverlapping = function(nums, target) {
    let count = [];
    let overlapCheck = [];
    for(let i = 0; i < nums.length; i++) {
        for(let j = nums.length; j >= 0; j--) {
            if(i < j) {
                let r = findSum(nums.slice(i, j));
                console.log(nums.slice(i, j), i , j, r);
                if(r === target) {
                    count.push({i, j});
                    overlapCheck.push(r.unique);
                }
            } else {
                continue;
            }
        }
    }
    console.log(count);
    return count;
};

function findSum(arr) {
    let sum = 0;
    for(let k = 0; k < arr.length; k++) {
        sum += arr[k];
    }
    return sum;
}
