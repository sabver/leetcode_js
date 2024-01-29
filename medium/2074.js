// https://leetcode.com/problems/reverse-nodes-in-even-length-groups/
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

let getLen = function (head) {
  if (!head) {
    return 0;
  }
  let cur = 1,
    curNode = head;
  while (curNode !== null) {
    curNode = curNode.next;
    if (curNode !== null) {
      cur++;
    }
  }
  return cur;
};

/**
 *
 * @param {*} head
 * @param {*} count
 * @returns tail of the list
 */
let skipNodesByCount = function (head, count) {
  let curNode = head,
    cur = 1;
  while (curNode !== null) {
    if (cur === count) {
      break;
    }
    cur++;
    curNode = curNode.next;
  }
  return curNode;
};

/**
 *
 * @param {*} pre
 * @param {*} head
 * @param {*} count the length of list
 * @returns
 */
let reverseNodesByCount = function (pre, head, count) {
  let cur = 1,
    curNode = head,
    dummy = new ListNode(-1);
  dummy.next = head;
  preNode = dummy;
  while (curNode !== null) {
    if (cur === count) {
      break;
    }
    if (curNode.next !== null) {
      cur++;
      curNode = curNode.next;
    } else {
      break;
    }
  }
  if (cur % 2 === 0) {
    return reverseNodes(pre, head, curNode);
  } else {
    return curNode;
  }
};

let reverseNodes = function (pre, head, tail) {
  if (head === null) {
    return;
  }
  if (head.next === null) {
    return;
  }
  let preNode = head,
    curNode = head.next,
    nextNode = head.next.next;
  let tailNext = tail.next;
  while (curNode) {
    curNode.next = preNode;

    preNode = curNode;
    curNode = nextNode;
    if (nextNode) {
      nextNode = nextNode.next;
    }
    if (preNode === tail) {
      break;
    }
  }
  pre.next = tail;
  head.next = tailNext;
  return head;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseEvenLengthGroups = function (head) {
  let group = 1,
    curNode = head,
    dummy = new ListNode(-1),
    preNode = null;
  dummy.next = head;
  preNode = dummy;
  while (curNode !== null) {
    curNode = reverseNodesByCount(preNode, curNode, group);
    preNode = curNode;
    curNode = curNode.next;
    group++;
  }
  return dummy.next;
};
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);
let node7 = new ListNode(7);
let node8 = new ListNode(8);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = null;
console.log("len", getLen(node7));
let pre = node2,
  head = node3,
  tail = node7;
// let node = reverseNodes(pre, head, tail);
// let node = reverseNodesByCount(pre, head, 4);
let node = reverseEvenLengthGroups(node1);
// console.log(node);
console.log(node1.val);
console.log(node1.next.val);
console.log(node1.next.next.val);
console.log(node1.next.next.next.val);
console.log(node1.next.next.next.next.val);
console.log(node1.next.next.next.next.next);
// console.log(node1);
