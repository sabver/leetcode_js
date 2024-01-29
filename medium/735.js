// https://leetcode.com/problems/asteroid-collision/
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [],
    val = 0;
  for (let i = 0; i < asteroids.length; i++) {
    // asteroids[i] != 0
    val = asteroids[i];
    while (true) {
      // only val < 0 && stack[stack.length - 1] > 0 will collide
      if (
        stack.length === 0 ||
        (stack.length > 0 && stack[stack.length - 1] < 0) ||
        val > 0
      ) {
        stack.push(val);
        break;
      }
      if (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        val < 0 &&
        stack[stack.length - 1] + val === 0
      ) {
        stack.pop();
        break;
      }
      if (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        val < 0 &&
        Math.abs(stack[stack.length - 1]) > Math.abs(val)
      ) {
        break;
      }
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        val < 0 &&
        Math.abs(stack[stack.length - 1]) < Math.abs(val)
      ) {
        stack.pop();
      }
    }
  }
  return stack;
};

let asteroids = [5, 10, -5];
console.log(asteroidCollision(asteroids));
