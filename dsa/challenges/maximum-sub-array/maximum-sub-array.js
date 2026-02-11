var maxSubArray = function(nums) {
    let minimumValue = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        for(let j = i; j < nums.length; j++) {
            sum = sum + nums[j];
            if(minimumValue < sum) {
                minimumValue = sum;
            }
        }
    }
    return minimumValue;
};
