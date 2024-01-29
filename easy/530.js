// https://leetcode.com/problems/minimum-absolute-difference-in-bst/
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
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let abs = Infinity,
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
  for (let i = 1; i < list.length; i++) {
    abs = Math.min(abs, Math.abs(list[i] - list[i - 1]));
  }
  return abs;
};
