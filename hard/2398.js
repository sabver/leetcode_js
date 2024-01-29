// https://leetcode.com/problems/maximum-number-of-robots-within-budget/
/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function (chargeTimes, runningCosts, budget) {
  let left = 0,
    ans = 0,
    stack = [],
    sum = 0;
  for (let right = 0; right < chargeTimes.length; right++) {
    while (
      stack.length > 0 &&
      chargeTimes[stack[stack.length - 1]] < chargeTimes[right]
    ) {
      stack.pop();
    }
    stack.push(right);
    sum += runningCosts[right];

    while (
      left <= right &&
      chargeTimes[stack[0]] + (right - left + 1) * sum > budget
    ) {
      left++;
      if (stack[0] < left) {
        stack.shift();
      }
      sum -= runningCosts[left - 1];
    }
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};
