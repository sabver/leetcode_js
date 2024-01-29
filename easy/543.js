// https://leetcode.com/problems/diameter-of-binary-tree/description/
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
var diameterOfBinaryTree = function (root) {
  let result = 0;
  let treeDepth = (root) => {
    if (root === null) {
      return 0;
    }
    let left = 0;
    if (root.left) {
      left = treeDepth(root.left) + 1;
    }
    let right = 0;
    if (root.right) {
      right = treeDepth(root.right) + 1;
    }
    result = Math.max(result, left + right);
    return Math.max(left, right);
  };
  treeDepth(root);
  return result;
};
