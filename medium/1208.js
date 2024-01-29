// https://leetcode.com/problems/get-equal-substrings-within-budget/

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
  let left = 0,
    right = 0,
    cost = 0,
    res = 0;
  for (right = 0; right < s.length; right++) {
    cost += Math.abs(s[right].charCodeAt(0) - t[right].charCodeAt(0));
    if (cost <= maxCost) {
      res = Math.max(res, right - left + 1);
    }
    while (cost > maxCost) {
      cost -= Math.abs(s[left].charCodeAt(0) - t[left].charCodeAt(0));
      left++;
    }
  }
  return res;
};
