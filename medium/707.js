// https://leetcode.com/problems/design-linked-list/
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var MyLinkedList = function () {
  this.head = null;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) {
    return -1;
  }
  let curNode = this.head,
    curIndex = 0;
  while (curNode !== null) {
    if (index === curIndex) {
      return curNode.val;
    }
    if (curNode.next !== null) {
      curNode = curNode.next;
      curIndex++;
    } else {
      break;
    }
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.addAtIndex(0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.addAtIndex(this.length, val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let dummy = new ListNode(-1);
  dummy.next = this.head;
  let curIndex = 0,
    curNode = dummy;
  while (curNode) {
    if (curIndex === index) {
      let nextNode = curNode.next;
      curNode.next = new ListNode(val);
      curNode.next.next = nextNode;
      this.length++;
      break;
    }
    if (curNode.next) {
      curNode = curNode.next;
      curIndex++;
    } else {
      break;
    }
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) {
    return;
  }
  let dummy = new ListNode(-1);
  dummy.next = head;
  let curIndex = 0,
    curNode = head,
    preNode = dummy;
  while (curNode) {
    if (curIndex === index) {
      preNode.next = curNode.next;
      this.length--;
      break;
    }
    if (curNode.next) {
      preNode = preNode.next;
      curNode = curNode.next;
      curIndex++;
    } else {
      break;
    }
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
