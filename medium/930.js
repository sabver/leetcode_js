// https://leetcode.com/problems/binary-subarrays-with-sum/
/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  let map = new Map();
  map.set(0, 1);
  let cur = 0,
    ans = 0;
  for (let i = 0; i < nums.length; i++) {
    cur += nums[i];
    ans += map.get(cur - goal) || 0;
    map.set(cur, (map.get(cur) || 0) + 1);
  }
  return ans;
};
