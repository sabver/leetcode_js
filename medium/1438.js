// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let increasing = [],
    decreasing = [],
    left = 0,
    right = 0,
    ans = 0;
  while (right < nums.length) {
    while (
      increasing.length > 0 &&
      increasing[increasing.length - 1] > nums[right]
    ) {
      increasing.pop();
    }
    while (
      decreasing.length > 0 &&
      decreasing[decreasing.length - 1] < nums[right]
    ) {
      decreasing.pop();
    }
    increasing.push(nums[right]);
    decreasing.push(nums[right]);

    // maintain the windows property
    while (
      decreasing.length > 0 &&
      increasing.length > 0 &&
      decreasing[0] - increasing[0] > limit
    ) {
      // ? 这里确保了nums[left]会等于decreasing[0]或者increasing[0]
      // 因为这里是边删除数组头部，边left往右边移动一个位置
      if (decreasing[0] === nums[left]) {
        decreasing.shift();
      }
      if (increasing[0] === nums[left]) {
        increasing.shift();
      }
      left++;
    }    
    ans = Math.max(ans, right - left + 1);
    right++;
  }
  return ans;
};
