// https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length === 1) {
    return 0;
  }
  let leftpresum = [nums[0]],
    rightpresum = [],
    pivot = -1;
  for (let i = 1; i < nums.length; i++) {
    leftpresum[i] = nums[i] + leftpresum[i - 1];
  }
  for (let i = 0; i < nums.length; i++) {
    rightpresum[i] = 0;
  }
  rightpresum[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    rightpresum[i] = nums[i] + rightpresum[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 && i < nums.length - 1) {
      if (rightpresum[i + 1] === 0) {
        pivot = 0;
        break;
      }
    }
    if (i > 0 && i === nums.length - 1) {
      if (leftpresum[i - 1] === 0) {
        pivot = nums.length - 1;
        break;
      }
    }
    if (i > 0 && i < nums.length - 1) {
      if (leftpresum[i - 1] === rightpresum[i + 1]) {
        pivot = i;
        break;
      }
    }
  }
  return pivot;
};

let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
