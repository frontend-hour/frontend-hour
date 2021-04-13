/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target, maincopy) {
    if (!maincopy) {
        maincopy = [...nums]
    }
    let middleIndex = Math.round(nums.length / 2);
    if (nums.length === 1) {
        let point = maincopy.indexOf(nums[0]);
        return (nums[0] === target) ? point : nums[0] > target ? point : point + 1;
    }
    if (nums[middleIndex] > target) {
        return searchInsert(nums.slice(0, middleIndex), target, maincopy);
    } else if (nums[middleIndex] < target) {
        return searchInsert(nums.slice(middleIndex, nums.length), target, maincopy);
    } else {
        return maincopy.indexOf(nums[middleIndex]);
    }
};

searchInsert([1, 3, 5, 6], 7);


// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2


// Solution 2 

function searchPosition(arr, target) {
    if (arr.indexOf(target) !== -1) {
        return arr.indexOf(target);
    }
    arr.push(target);
    arr.sort(function (a, b) {
        return a - b;
    });
    return arr.indexOf(target);
}

searchPosition([1, 3, 5, 6], 1.2);