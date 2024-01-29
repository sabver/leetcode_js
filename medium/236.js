// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let result = null,
    isEnd = false;
  /**
   *
   * @param {*} root
   * @param {*} p
   * @param {*} q
   * @return {p: true|false, q:true|false}
   */
  let find = (root, p, q) => {
    if (root === null) {
      return {
        p: false,
        q: false,
      };
    }
    let left = find(root.left, p, q),
      right = find(root.right, p, q);
    if (isEnd) {
      return;
    }
    let curResult = {
      p: root.val === p.val || left.p || right.p,
      q: root.val === q.val || left.q || right.q,
    };
    if (curResult.p && curResult.q) {
      result = root;
      isEnd = true;
    }
    return curResult;
  };
  find(root, p, q);
  return result;
};
