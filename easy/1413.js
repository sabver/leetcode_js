// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let presum = [nums[0]];
  let min = presum[0];
  for (let i = 1; i < nums.length; i++) {
    presum[i] = nums[i] + presum[i - 1];
    min = Math.min(min, presum[i]);
  }
  return min < 0 ? 1 - min : 1;
};
