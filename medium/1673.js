// https://leetcode.com/problems/find-the-most-competitive-subsequence/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    // nums[i]
    while (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
      // stack.peek() should be pop?
      if (k - stack.length < nums.length - i) {
        stack.pop();
      } else {
        break;
      }
    }
    if (stack.length < k) {
      stack.push(nums[i]);
    }
  }
  return stack;
};
