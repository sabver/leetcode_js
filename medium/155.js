// https://leetcode.com/problems/min-stack/

var MinStack = function () {
  this.stack = [];
  this.stack.push({
    min: Number.MAX_VALUE,
    val: Number.MAX_VALUE,
  });
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let min = Math.min(this.stack[this.stack.length - 1].min, val);
  this.stack.push({
    val: val,
    min: min,
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  if (this.stack.length === 0) {
    this.stack.push({
      min: Number.MAX_VALUE,
      val: Number.MAX_VALUE,
    });
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length <= 1) {
    return null;
  }
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length <= 1) {
    return null;
  }
  return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
