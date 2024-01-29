// https://leetcode.com/problems/reverse-words-in-a-string-iii/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let left = 0;
  let result = [];
  for (let right = 0; right < s.length; right++) {
    if (s[right] === " ") {
      for (let i = right - 1; i >= left; i--) {
        if (i >= 0) {
          result.push(s[i]);
        }
      }
      result.push(" ");
      left = right + 1;
    } else if (right === s.length - 1) {
      for (let i = right; i >= left; i--) {
        result.push(s[i]);
      }
    }
  }
  return result.join("");
};
