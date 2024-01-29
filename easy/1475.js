// https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let stack = [],
    answer = new Array(prices.length).fill(0);
  for (let i = 0; i < prices.length; i++) {
    answer[i] = prices[i];
    // i > j and prices[i] <= prices[j]
    // j is stack[stack.length - 1]
    while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
      let j = stack[stack.length - 1];
      answer[j] -= prices[i];
      stack.pop();
    }
    stack.push(i);
  }
  return answer;
};
