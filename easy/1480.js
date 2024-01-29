// https://leetcode.com/problems/running-sum-of-1d-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let result = [];
  if (nums.length === 0) {
    return result;
  }
  result.push(nums[0]);
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i] + result[i - 1];
  }
  return result;
};
