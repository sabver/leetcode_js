// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  let curNode = head,
    result = head.val;
  while (curNode) {
    curNode = curNode.next;
    if (curNode) {
      result = result * 2 + curNode.val;
    }
  }
  return result;
};
