// https://leetcode.com/problems/k-radius-subarray-averages/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
  let avrs = [];
  let sum = 0,
    len = 2 * k + 1;
  if (nums.length < len) {
    for (let i = 0; i < nums.length; i++) {
      avrs.push(-1);
    }
    return avrs;
  } else if (k === 0) {
    return nums;
  } else {
    // build subarray's sum
    for (let i = 0; i < len; i++) {
      sum += nums[i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (i < k || i + k >= nums.length) {
      avrs[i] = -1;
    } else {
      avrs[i] = parseInt(sum / len);
      // update sum
      if (i + k + 1 < nums.length) {
        sum = sum - nums[i - k] + nums[i + k + 1];
      }
    }
  }
  return avrs;
};
