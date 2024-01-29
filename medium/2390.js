// https://leetcode.com/problems/removing-stars-from-a-string/
/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && s[i] === "*") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
};
