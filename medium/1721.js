// https://leetcode.com/problems/swapping-nodes-in-a-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let slowNode = head,
    fastNode = head,
    count = k,
    tagetNodeFirst = dummy;
  while (count > 0) {
    count--;
    fastNode = fastNode.next;
    tagetNodeFirst = tagetNodeFirst.next;
  }
  while (slowNode && fastNode) {
    slowNode = slowNode.next;
    fastNode = fastNode.next;
  }
  let tempval = slowNode.val;
  slowNode.val = tagetNodeFirst.val;
  tagetNodeFirst.val = tempval;
  return dummy.next;
};
