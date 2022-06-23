/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let numsCopy = [...nums]
    numsCopy.sort(function(a, b){return a-b});
    // If the nums array is not sorted, we should sort for ourselves and indexes will change and we need to do heavy
    // lifting to bring back the orginal indexes of nums array
    while(left < right) {
        let currentSum = numsCopy[left] + numsCopy[right];
        if(currentSum > target) {
            right-=1;
        } else if(currentSum < target) {
            left+=1;
        } else {
            let leftIndex = nums.indexOf(numsCopy[left]);
            let rightIndex = nums.indexOf(numsCopy[right]);
            if(leftIndex === rightIndex) {
                rightIndex = nums.indexOf(numsCopy[right], left+1);
            }
            return [leftIndex, rightIndex];
        }
    }
};
