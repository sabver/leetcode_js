// https://leetcode.com/problems/determine-if-two-strings-are-close/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let set1 = new Set(),
    set2 = new Set(),
    map1 = new Map(),
    map2 = new Map();
  for (let i = 0; i < word1.length; i++) {
    set1.add(word1[i]);
    map1.set(word1[i], (map1.get(word1[i]) || 0) + 1);
  }
  for (let i = 0; i < word2.length; i++) {
    set2.add(word2[i]);
    map2.set(word2[i], (map2.get(word2[i]) || 0) + 1);
  }
  if (set1.size !== set2.size) {
    return false;
  }
  let freList1 = [],
    freList2 = [];
  for (let key of set1.keys()) {
    if (set2.has(key) === false) {
      return false;
    }
    freList1.push(map1.get(key));
    freList2.push(map2.get(key));
  }
  if (freList1.length !== freList2.length) {
    return false;
  }
  freList1.sort();
  freList2.sort();
  for (let i = 0; i < freList1.length; i++) {
    if (freList1[i] !== freList2[i]) {
      return false;
    }
  }
  return true;
};
