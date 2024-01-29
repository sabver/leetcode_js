// https://leetcode.com/problems/find-lucky-integer-in-an-array/
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let map = new Map();
  for (var i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }
  let luckyNum = -1;
  for (let key of map.keys()) {
    if (key === map.get(key)) {
      luckyNum = Math.max(luckyNum, key);
    }
  }
  return luckyNum;
};
