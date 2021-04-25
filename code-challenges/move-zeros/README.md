## Move Zeros to End of Array
> Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
> Note that you must do this in-place without making a copy of the array.

```javascript
function zeroBack(nums) {
  let length = nums.length;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
    }
  }
}

zeroBack([0,1,0,3,12]);
```
 
 ```
Exercise 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```
```
Example 2:
Input: nums = [0]
Output: [0]
```
```
Constraints:
• 1 <= nums.length <= 10^4
• -2^31 <= nums[i] <= 2^31- 1
```
