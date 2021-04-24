function zeroBack(nums) {
  let length = nums.length;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
    }
  }
}

zeroBack([0,1,0,3,12]);
