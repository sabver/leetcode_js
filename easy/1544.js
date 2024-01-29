// https://leetcode.com/problems/make-the-string-great/description/
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let stack = [],
    top = "";
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0) {
      top = stack[stack.length - 1];
      if (
        top !== s[i] &&
        top.toLocaleLowerCase() === s[i].toLocaleLowerCase()
      ) {
        stack.pop();
        continue;
      }
    }
    stack.push(s[i]);
  }
  return stack.join("");
};
