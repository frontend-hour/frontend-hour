var majorityElement = function(nums) {
    let counter = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(counter.hasOwnProperty(nums[i])) {
            counter[nums[i]]+=1;
        } else {
            counter[nums[i]] = 1;
        }
    }
    let major = null;
    Object.keys(counter).forEach((key) => {
        console.log(counter[key], key, Math.round(nums.length/2));
       if(counter[key] >= Math.round(nums.length/2)) {
           major =  Number(key);
       } 
    });
    return major;
};
