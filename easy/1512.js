// https://leetcode.com/problems/number-of-good-pairs/
/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  let sumOf1to = (n) => {
    return (n * (n + 1)) / 2;
  };
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) === false) {
      map.set(nums[i], []);
    }
    map.get(nums[i]).push(i);
  }
  let count = 0,
    arr = [];
  for (let key of map.keys()) {
    arr = map.get(key);
    if (arr.length > 1) {
      count += sumOf1to(arr.length - 1);
    }
  }
  return count;
};
