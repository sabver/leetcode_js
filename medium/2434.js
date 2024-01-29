// https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/
/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function (s) {
  let ans = "",
    stack = [],
    min = new Array(s.length + 1).fill("z");
  for (let i = s.length - 1; i >= 0; i--) {
    min[i] = Math.min(min[i + 1], s[i]);
  }
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
    while (stack.length > 0 && stack[stack.length - 1] <= min[i + 1]) {
      ans += stack.pop();
    }
  }
  return ans;
};
