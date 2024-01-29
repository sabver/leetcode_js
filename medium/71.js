// https://leetcode.com/problems/simplify-path/description/
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let paths = path.split("/"),
    stack = [];
  for (let i = 0; i < paths.length; i++) {
    if (paths[i] === "") {
      //
    } else if (paths[i] === ".") {
      //
    } else if (paths[i] === "..") {
      stack.pop();
    } else {
      stack.push(paths[i]);
    }
  }
  let result = "/";
  for (let i = 0; i < stack.length; i++) {
    if (stack.length - 1 === i) {
      result += stack[i];
    } else {
      result += stack[i] + "/";
    }
  }
  return result;
};
let path = "/a/../../b/../c//.//";
console.log(simplifyPath(path));
