// https://leetcode.com/problems/unique-number-of-occurrences/
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let countMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    countMap.set(arr[i], (countMap.get(arr[i]) || 0) + 1);
  }
  let set = new Set(),
    flag = true;
  for (let value of countMap.values()) {
    if (set.has(value)) {
      flag = false;
      break;
    }
    set.add(value);
  }
  return flag;
};
