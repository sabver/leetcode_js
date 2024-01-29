// https://leetcode.com/problems/intersection-of-multiple-arrays/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  let result = [],
    map = new Map(),
    n = nums.length;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (map.has(nums[i][j])) {
        map.set(nums[i][j], map.get(nums[i][j]) + 1);
      } else {
        map.set(nums[i][j], 1);
      }
    }
  }
  let iterator = map.keys();
  for (const key of iterator) {
    if (map.get(key) === n) {
      result.push(key);
    }
  }
  result.sort((a, b) => a - b);
  return result;
};

let nums = [
  [3, 1, 2, 4, 5],
  [1, 2, 3, 4],
  [3, 4, 5, 6],
];
console.log(intersection(nums));
