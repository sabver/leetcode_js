// https://leetcode.com/problems/online-stock-span/description/
var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let ans = 1;
  while (this.stack.length > 0 && this.stack[this.stack.length - 1].price <= price) {
    let pop = this.stack.pop();
    ans += pop.ans;
  }
  this.stack.push({
    ans: ans,
    price: price,
  });
  return ans;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
