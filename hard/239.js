// https://leetcode.com/problems/sliding-window-maximum/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = [],
    queue = [];

  for (let i = 0; i < nums.length; i++) {
    while (queue.length > 0 && nums[i] > nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
    if (i - queue[0] === k) {
      queue.shift();
    }
    if (i >= k - 1) {
      result.push(nums[queue[0]]);
    }
  }
  return result;
};
