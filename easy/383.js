// https://leetcode.com/problems/ransom-note/description/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let mmap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    mmap.set(magazine[i], (mmap.get(magazine[i]) || 0) + 1);
  }
  let flag = true,
    key = "";
  for (let i = 0; i < ransomNote.length; i++) {
    key = ransomNote[i];
    if (mmap.has(key) === false || mmap.get(key) === 0) {
      flag = false;
      break;
    }
    mmap.set(key, mmap.get(key) - 1);
  }
  return flag;
};
