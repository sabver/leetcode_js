// https://leetcode.com/problems/closest-binary-search-tree-value/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let abs = Infinity,
    result = null,
    list = [];
  let dfs = (node) => {
    if (!node) {
      return;
    }
    dfs(node.left);
    list.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  abs = Math.abs(list[0] - target);
  result = list[0];
  let tempAbs = 0;
  for (let i = 1; i < list.length; i++) {
    tempAbs = Math.abs(list[i] - target);
    if (tempAbs < abs) {
      abs = tempAbs;
      result = list[i];
    } else {
      break;
    }
  }
  return result;
};
