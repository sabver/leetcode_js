// https://leetcode.com/problems/number-of-visible-people-in-a-queue/
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  let stack = [],
    ans = new Array(heights.length).fill(0);
  for (let i = heights.length - 1; i >= 0; i++) {
    let count = 0;
    while (stack.length > 0 && stack[stack.length - 1] <= heights[i]) {
      count++;
      stack.pop();
    }
    if (stack.length === 0) {
      count--;
    }
    ans[i] = count;
    stack.push(heights[i]);
  }
  return ans;
};
