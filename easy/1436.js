// https://leetcode.com/problems/destination-city/
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let from = new Set(),
    to = new Set();
  for (let i = 0; i < paths.length; i++) {
    from.add(paths[i][0]);
    to.add(paths[i][1]);
  }
  let result = "";
  for (let key of to.keys()) {
    if (from.has(key) === false) {
      result = key;
      break
    }
  }
  return result;
};
