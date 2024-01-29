// https://leetcode.com/problems/largest-unique-number/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  let max = -1;
  for (let [k, v] of map) {
    if (v === 1) {
      max = Math.max(max, k);
    }
  }
  return max;
};
