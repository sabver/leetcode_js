// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = nums.length + 1,
    left = 0,
    sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      console.log("min", min);
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return min == nums.length + 1 ? 0 : min;
};

let target = 11,
  nums = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(minSubArrayLen(target, nums));
