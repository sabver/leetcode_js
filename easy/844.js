// https://leetcode.com/problems/backspace-string-compare/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let sStack = [],
    tStack = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      sStack.pop();
      continue;
    }
    sStack.push(s[i]);
  }
  for (var i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      tStack.pop();
      continue;
    }
    tStack.push(t[i]);
  }
//   console.log(sStack);
//   console.log(tStack);
  return sStack.join("") === tStack.join("");
};

let s = "y#fo##f",
  t = "y#f#o##f";
console.log(backspaceCompare(s, t));
