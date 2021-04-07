var removeDuplicates = function(nums) {
    let prev;
    for(let i = 0; i < nums.length; i++) {
        if(prev === nums[i]) {
            nums.splice(i, 1);
            i--;
        }
        prev = nums[i];
    }
    return nums.length;
};