// https://leetcode.com/problems/path-sum/
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
 * @param {number} targetSum
 * @return {boolean}
 */
// var hasPathSum = function (root, targetSum) {
//   let func = (node, sum) => {
//     if (node === null) {
//       return false;
//     }
//     let rest = sum - node.val;
//     if (node.left === null && node.right === null) {
//       return rest === 0;
//     }
//     let left = func(node.left, rest);
//     let right = func(node.right, rest);
//     return left || right;
//   };
//   return func(root, targetSum);
// };
var hasPathSum = function (root, targetSum) {
  if (root === null) {
    return false;
  }
  let stack = [];
  stack.push({
    node: root,
    val: targetSum,
  });
  while (stack.length > 0) {
    let pop = stack.pop();
    let rest = pop.val - pop.node.val;
    if (pop.node.left === null && pop.node.right === null) {
      if (rest === 0) {
        return true;
      }
    }
    if (pop.node.left !== null) {
      stack.push({
        node: pop.node.left,
        val: rest,
      });
    }
    if (pop.node.right !== null) {
      stack.push({
        node: pop.node.right,
        val: rest,
      });
    }
  }
  return false;
};
