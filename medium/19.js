// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let slowNode = head,
    fastNode = head,
    preNode = dummy,
    count = n;
  while (count > 0) {
    fastNode = fastNode.next;
    count--;
  }
  while (fastNode) {
    slowNode = slowNode.next;
    fastNode = fastNode.next;
    preNode = preNode.next;
  }
  preNode.next = slowNode.next;
  return dummy.next;
};
