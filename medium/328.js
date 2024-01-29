// https://leetcode.com/problems/odd-even-linked-list/
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
var oddEvenList = function (head) {
  let tail = null,
    curNode = head,
    lastIndex = 0;
  while (curNode) {
    if (curNode.next) {
      curNode = curNode.next;
      lastIndex++;
    } else {
      break;
    }
  }
  tail = curNode;

  let dummy = new ListNode(-1),
    index = 0,
    preNode = null,
    nextNode = null;
  curNode = head;
  dummy.next = head;
  preNode = dummy;
  while (curNode) {
    if (index === lastIndex + 1) {
      break;
    }
    if (index % 2 === 1) {
      if (curNode === tail) {
        break;
      }
      // exchange
      nextNode = curNode.next;
      preNode.next = nextNode;

      tail.next = curNode;
      curNode.next = null;
      tail = curNode;

      curNode = nextNode;
      index++;
    } else {
      curNode = curNode.next;
      preNode = preNode.next;
      index++;
    }
  }
  return dummy.next;
};
