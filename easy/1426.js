// https://leetcode.com/problems/counting-elements/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] + 1)) {
      count++;
    }
  }
  return count;
};
