// https://leetcode.com/problems/remove-linked-list-elements/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let preNode = dummy,
    curNode = head;
  while (curNode !== null) {
    if (curNode.val === val) {
      // delete
      preNode.next = curNode.next;
      curNode = preNode.next;
    } else {
      preNode = preNode.next;
      curNode = curNode.next;
    }
  }
  return dummy.next;
};
