// https://leetcode.com/problems/reverse-linked-list-ii/description/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let count = 1,
    leftPrevNode = null,
    rightNextNode = null,
    dummy = new ListNode(-1),
    curNode = null,
    preNode = null,
    stack = [];
  dummy.next = head;
  preNode = dummy;
  curNode = head;
  while (curNode) {
    if (count >= left) {
      stack.push(curNode);
    }
    if (count === left) {
      leftPrevNode = preNode;
    }
    if (count === right) {
      rightNextNode = curNode.next;
      break;
    }
    count++;
    curNode = curNode.next;
    preNode = preNode.next;
  }
  while (stack.length > 0) {
    curNode = stack.pop();
    leftPrevNode.next = curNode;

    leftPrevNode = curNode;
    if (stack.length === 0) {
      curNode.next = rightNextNode;
    }
  }
  return dummy.next;
};
