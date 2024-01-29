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
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  let result = [],
    queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    let nextQueue = [];
    for (let i = 0; i < len; i++) {
      let node = queue[i];
      if (i === len - 1) {
        result.push(node.val);
      }
      if (node.left) {
        nextQueue.push(node.left);
      }
      if (node.right) {
        nextQueue.push(node.right);
      }
    }
    queue = nextQueue;
  }
  return result;
};
