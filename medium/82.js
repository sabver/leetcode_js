// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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
var deleteDuplicates = function (head) {
  if (!head) {
    return head;
  }
  if (!head.next) {
    return head;
  }
  let dummy = new ListNode(-1);
  dummy.next = head;
  let slowNode = head,
    fastNode = head.next,
    preNode = dummy;
  while (slowNode && fastNode) {
    let reset = false;
    while (slowNode && fastNode && slowNode.val === fastNode.val) {
      slowNode = slowNode.next;
      fastNode = fastNode.next;
      reset = true;
    }
    if (reset) {
      preNode.next = fastNode;
      slowNode = fastNode;
      if( fastNode ){
        fastNode = fastNode.next;
      }
    } else {
      slowNode = slowNode.next;
      fastNode = fastNode.next;
      preNode = preNode.next;
    }
  }
  return dummy.next;
};
