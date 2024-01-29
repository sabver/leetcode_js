// https://leetcode.com/problems/find-largest-value-in-each-tree-row/
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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) {
    return [];
  }
  let queue = [root],
    result = [];
  while (queue.length > 0) {
    let len = queue.length;
    let nextQueue = [];
    let val = queue[0].val;
    for (let i = 0; i < len; i++) {
      let node = queue[i];
      val = Math.max(val, node.val);
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }
    result.push(val);
    queue = nextQueue;
  }
  return result;
};
