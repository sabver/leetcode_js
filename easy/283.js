// https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let right = 0;
  for (let i = 0; i < nums.length; i++) {
    while (right < nums.length && nums[right] === 0) {
      right++;
    }
    if (right > nums.length - 1) {
      nums[i] = 0;
    } else {
      nums[i] = nums[right];
      right++
    }
  }
};
let nums = [0,1,0,3,12]
moveZeroes(nums)
console.log(nums)