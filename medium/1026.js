// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/description/
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
var maxAncestorDiff = function (root) {
  let result = 0;
  let func = (root, min, max) => {
    if (root === null) {
      return;
    }
    result = Math.max(
      result,
      Math.abs(root.val - min),
      Math.abs(root.val - max)
    );
    min = Math.min(root.val, min);
    max = Math.max(root.val, max);
    func(root.left, min, max);
    func(root.right, min, max);
  };
  func(root, root.val, root.val);
  return result;
};
