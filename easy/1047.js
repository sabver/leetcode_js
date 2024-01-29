// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0) {
      if (stack[stack.length - 1] === s[i]) {
        stack.pop();
        continue;
      }
    }
    stack.push(s[i]);
  }
  let result = "";
  for (let i = 0; i < stack.length; i++) {
    result += stack[i];
  }
  return result;
};
