/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    // #1
    // return nums.concat(nums);

    // #2
    let array = [];
    for(let i=0; i < nums.length; i++) {
        array[i] = nums[i]; 
        array[nums.length + i] = nums[i]
    }


    // #3
    // let array = [];
    // for(let i=0; i < nums.length; i++) {
    //     array.push(nums[i]);
    // }
    // for(let i=0; i < nums.length; i++) {
    //     array.push(nums[i])
    // }
    return array;
};