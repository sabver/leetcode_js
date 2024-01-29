// https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  if (head === null) {
    return head;
  }
  if (head.next === null) {
    return null;
  }
  let slowNode = head,
    fastNode = head.next,
    dummy = new ListNode(-1),
    preNode = dummy;
  dummy.next = head;
  while (fastNode) {
    slowNode = slowNode.next;
    if (fastNode.next) {
      fastNode = fastNode.next.next;
    } else {
      fastNode = null;
    }
    preNode = preNode.next;
  }
  preNode.next = slowNode.next;
  return dummy.next;
};
