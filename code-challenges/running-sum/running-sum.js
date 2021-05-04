var runningSum = function (nums) {
    let p = [];
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];
        p.push(total);
    }
    return p;
};


//Solution 1 - Alternate solution

var runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }
    return nums
};