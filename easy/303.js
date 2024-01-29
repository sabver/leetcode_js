// https://leetcode.com/problems/range-sum-query-immutable/

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let presum = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    presum[i] = nums[i] + presum[i - 1];
  }
  this.presum = presum
  return this;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left == 0) {
    return this.presum[right];
  } else {
    return this.presum[right] - this.presum[left - 1];
  }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
let nums = [-2, 0, 3, -5, 2, -1]
var obj = new NumArray(nums)
console.log(obj)
var param_1 = obj.sumRange(2,5)
console.log(param_1)
