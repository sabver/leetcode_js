// https://leetcode.com/problems/maximum-erasure-value/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let sum = 0,
    left = 0,
    max = 0;
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    while (set.has(nums[i])) {
      set.delete(nums[left]);
      sum -= nums[left];
      left++;
    }
    set.add(nums[i]);
    sum += nums[i];
    max = Math.max(max, sum);
  }
  return max;
};
