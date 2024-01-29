// https://leetcode.com/problems/moving-average-from-data-stream/description/
/**
 * @param {number} size
 */
var MovingAverage = function (size) {
  this.size = size;
  this.queue = [];
  this.sum = 0;
  this.lastIndex = -1;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  if (this.queue.length < this.size) {
    this.queue.push(val);
    this.sum += val;
    if (this.queue.length === this.size) {
      this.lastIndex = 0;
    }
  } else {
    this.sum -= this.queue[this.lastIndex];
    this.lastIndex++;
    this.sum += val;
    this.queue.push(val);
  }
  if (this.queue.length < this.size) {
    return this.sum / this.queue.length;
  } else {
    return this.sum / this.size;
  }
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
