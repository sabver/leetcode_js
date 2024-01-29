// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
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
var deleteDuplicates = function(head) {
    if( !head || !head.next ){
        return head
    }
    /**
     * delete node
     */
    let deleteNode = (prenode, node) => {
        prenode.next = node.next
    }
    let slow = head, fast = head.next
    while( fast ){
        if( slow.val === fast.val ){
            deleteNode(slow, fast)
            fast = slow.next
        } else {
            slow = slow.next
            fast = fast.next 
        }       
    }
    return head    
};