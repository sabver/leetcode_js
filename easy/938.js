// https://leetcode.com/problems/range-sum-of-bst/
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  let dfs = (node, low, high) => {
    if (!node) {
      return;
    }
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    if (node.val > low) {
      dfs(node.left, low, high);
    }
    if (node.val < high) {
      dfs(node.right, low, high);
    }
  };
  dfs(root, low, high);
  return sum;
};
