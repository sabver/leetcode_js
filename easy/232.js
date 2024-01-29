// https://leetcode.com/problems/implement-queue-using-stacks/
var MyQueue = function () {
  this.stack = [];
  this.backupStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack.length === 0) {
    return null;
  }
  while (this.stack.length > 0) {
    this.backupStack.push(this.stack.pop());
  }
  let result = this.backupStack.pop();
  while (this.backupStack.length > 0) {
    this.stack.push(this.backupStack.pop());
  }
  return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack.length === 0) {
    return null;
  }
  while (this.stack.length > 0) {
    this.backupStack.push(this.stack.pop());
  }
  let result = this.backupStack[this.backupStack.length - 1];
  while (this.backupStack.length > 0) {
    this.stack.push(this.backupStack.pop());
  }
  return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
