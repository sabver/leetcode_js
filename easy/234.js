// https://leetcode.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let dummy = new ListNode(-1);
  dummy.next = head;
  let preNode = dummy,
    curNode = head,
    nextNode = head.next;
  while (curNode) {
    curNode.next = preNode;

    preNode = curNode;
    curNode = nextNode;
    if (nextNode) {
      nextNode = nextNode.next;
    }
  }
  head.next = null;
  return preNode;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head.next) {
    return true;
  }
  let dummy = new ListNode(-1);
  dummy.next = head;
  let slowNode = head,
    fastNode = head,
    firstHalfEndNode = null;
  while (fastNode && fastNode.next && fastNode.next.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }
  firstHalfEndNode = slowNode;
  // reverse the list
  let secondHalfStartNode = reverseList(firstHalfEndNode.next);
  let flag = true;
  let p1 = head,
    p2 = secondHalfStartNode;
  while (flag && p2 !== null) {
    if (p1.val !== p2.val) {
      flag = false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  firstHalfEndNode.next = reverseList(secondHalfStartNode)
  return flag;
};

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;
// console.log(isPalindrome(node1))
let rerverseNode = reverseList(node1);
console.log(rerverseNode, rerverseNode.next, rerverseNode.next.next);
