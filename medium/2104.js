// https://leetcode.com/problems/sum-of-subarray-ranges/
/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  let s1 = [],
    s2 = [],
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    while (s1.length > 0 && s1[s1.length - 1] <= nums[i]) {
      s1.pop();
      if (s1.length > 0 && s2.length > 0) {
        sum += s1[0] - s2[0];
      }
    }
    while (s2.length > 0 && s2[s2.length - 1] >= nums[i]) {
      s2.pop();
      if (s1.length > 0 && s2.length > 0) {
        sum += s1[0] - s2[0];
      }
    }
    s1.push(nums[i]);
    s2.push(nums[i]);
    console.log(s1, s2);
    sum += s1[0] - s2[0];
  }
  return sum;
};
let nums = [4, -2, -3, 4, 1];
console.log(subArrayRanges(nums));
