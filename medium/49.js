// https://leetcode.com/problems/group-anagrams/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (const s of strs) {
    let key = s.split("").sort().join("");
    if (map.has(key) === false) {
      map.set(key, []);
    }
    map.get(key).push(s);
  }

  let ans = [];
  for (const value of map.values()) {
    ans.push(value);
  }

  return ans;
};
