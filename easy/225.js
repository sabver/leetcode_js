// https://leetcode.com/problems/implement-stack-using-queues/description/

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
  this.topVal = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.topVal = x;
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.q1.length > 1) {
    this.q2.push(this.q1.shift());
  }
  let pop = this.q1.shift();
  while (this.q2.length > 0) {
    this.topVal = this.q2.shift();
    this.q1.push(this.topVal);
  }
  return pop;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.topVal;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
