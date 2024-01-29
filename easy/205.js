// https://leetcode.com/problems/isomorphic-strings/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let map = new Map(),
    set = new Set();
  len = s.length;
  for (let i = 0; i < len; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      if (set.has(t[i])) {
        return false;
      }
    }
    map.set(s[i], t[i]);
    set.add(t[i]);
  }
  return true;
};
let s = "bbbaaaba",
  t = "aaabbbba";
console.log(isIsomorphic(s, t));
