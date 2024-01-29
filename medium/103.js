// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  let result = [];
  if (!root) {
    return result;
  }
  let queue = [root],
    level = 0;
  while (queue.length > 0) {
    let record = [],
      nextLevel = [];
    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];
      if (level % 2 === 0) {
        record.push(node.val);
      } else {
        record.push(queue[queue.length - 1 - i].val);
      }
      if (node.left) {
        nextLevel.push(node.left);
      }
      if (node.right) {
        nextLevel.push(node.right);
      }
    }
    queue = nextLevel;
    level++;
    result.push(record);
  }
  return result;
};
