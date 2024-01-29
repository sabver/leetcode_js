// https://leetcode.com/problems/word-pattern/
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let arr = s.split(" "),
    map = new Map(),
    set = new Set();
  if (pattern.length !== arr.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== arr[i]) {
        return false;
      }
    } else {
      if (set.has(arr[i])) {
        return false;
      }
    }
    set.add(arr[i]);
    map.set(pattern[i], arr[i]);
  }
  return true;
};
let pattern = "abba",
  s = "dog cat cat dog";
console.log(wordPattern(pattern, s));
