// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]] = map[s[i]] + 1;
    } else {
      map[s[i]] = 1;
    }
  }
  let count = map[s[0]],
    flag = true;
  for (let i = 1; i < s.length; i++) {
    if (map[s[i]] !== count) {
      flag = false;
      break;
    }
  }
  return flag;
};
