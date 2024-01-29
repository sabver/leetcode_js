// https://leetcode.com/problems/number-of-valid-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarrays = function (nums) {
  let stack = [],
    ans = 0;
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      ans += i - stack[stack.length - 1];
      stack.pop();
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    ans += nums.length - stack.pop();
  }
  return ans;
};
