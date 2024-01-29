// https://leetcode.com/problems/deepest-leaves-sum/description/
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
var deepestLeavesSum = function (root) {
  if (!root) {
    return 0;
  }
  let queue = [root],
    result = 0;
  while (queue.length > 0) {
    let len = queue.length;
    let nextQueue = [],
      sum = 0;
    for (let i = 0; i < len; i++) {
      let node = queue[i];
      sum += node.val;
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }
    if (nextQueue.length === 0) {
      result = sum;
    }
    queue = nextQueue;
  }
  return result;
};
