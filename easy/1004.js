// https://leetcode.com/problems/max-consecutive-ones-iii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // count: the number of 0
  let max = 0,
    left = 0,
    count = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] == 0) {
      count++;
    }
    while (count > k) {
      if (nums[left] == 0) {
        count--;
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
console.log(longestOnes(nums, k));
