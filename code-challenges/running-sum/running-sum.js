var runningSum = function(nums) {
    let p = [];
    let total = 0;
    for(let i = 0; i < nums.length; i++) {
        total = total + nums[i];
        p.push(total);
    }
    return p;
};
