// https://leetcode.com/problems/custom-sort-string/
/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let result = [];
  let set = new Set(),
    map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < order.length; i++) {
    if (map.has(order[i])) {
      set.add(order[i]);
      let len = map.get(order[i]);
      for (let j = 0; j < len; j++) {
        result.push(order[i]);
      }
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i]) === false) {
      result.push(s[i]);
    }
  }
  return result.join("");
};
