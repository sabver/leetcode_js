// https://leetcode.com/problems/swap-nodes-in-pairs/
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
var swapPairs = function (head) {
    let dummy = new ListNode(-1)
    dummy.next = head
    let prevNode = dummy, firstNode = null, secondNode = null;
    while( head && head.next ){
        firstNode = head;
        secondNode = head.next;

        // swapping
        firstNode.next = secondNode.next
        secondNode.next = firstNode
        prevNode.next = secondNode

        // init
        prevNode = firstNode;
        head = firstNode.next;
    }

    return dummy.next
};
