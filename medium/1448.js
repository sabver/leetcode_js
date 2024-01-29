// https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
var goodNodes = function (root) {
  let count = 0;
  let dfs = (childNode, max) => {
    if (childNode === null) {
      return;
    }
    if (childNode === root) {
      count++;
    } else {
      if (childNode.val >= max) {
        count++;
      }
    }
    let newMax = Math.max(max, childNode.val);
    dfs(childNode.left, newMax);
    dfs(childNode.right, newMax);
  };
  dfs(root, root.val);
  return count;
};
