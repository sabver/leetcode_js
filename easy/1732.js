// https://leetcode.com/problems/find-the-highest-altitude/

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let presum = [gain[0]],
    max = Number.MIN_VALUE;
  for (let i = 1; i < gain.length; i++) {
    presum[i] = gain[i] + presum[i - 1];
  }
  for (let i = 0; i < gain.length; i++) {
    max = Math.max(max, presum[i]);
  }
  return max;
};
