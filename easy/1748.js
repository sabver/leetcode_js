// https://leetcode.com/problems/sum-of-unique-elements/
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let sum = 0,
    map = new Map(),
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    count = map.get(nums[i]) || 0;
    if (count === 1) {
      sum -= nums[i];
    } else if (count == 0) {
      sum += nums[i];
    }
  }
  return sum;
};
