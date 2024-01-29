// https://leetcode.com/problems/subarray-sum-equals-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let map = new Map();
  map.set(0, 1);
  let result = 0,
    sum = 0;
  for (let num of nums) {
    sum += num;
    result += map.get(sum - k) || 0;
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return result;
};

let nums = [-1, -1, 1],
  k = 0;
console.log(subarraySum(nums, k));
