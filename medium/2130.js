// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

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
var pairSum = function (head) {
  let stack = [],
    result = 0,
    curVal = 0;
  let slowNode = head,
    fastNode = head;
  while (fastNode && fastNode.next) {
    curVal = slowNode.val;
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
    stack.push(curVal);   
  }
  while (slowNode) {
    let pop = stack.pop();
    result = Math.max(result, pop + slowNode.val);
    slowNode = slowNode.next;
  }
  return result;
};
