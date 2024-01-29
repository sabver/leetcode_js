// https://leetcode.com/problems/maximum-number-of-balloons/description/
/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let str = "balloon",
    unique = "balon";
  let countmap = new Map(),
    map = new Map(),
    set = new Set(unique.split(""));
  for (let i = 0; i < str.length; i++) {
    countmap.set(str[i], (countmap.get(str[i]) || 0) + 1);
  }
//   console.log(countmap, set)
  for (let i = 0; i < text.length; i++) {
    if (set.has(text[i])) {
      map.set(text[i], (map.get(text[i]) || 0) + 1);
    }
  }
//   console.log(map)
  let result = Number.MAX_VALUE;
  for (let i = 0; i < unique.length; i++) {
    if (map.has(unique[i]) === false || map.get(unique[i]) === 0) {
      return 0;
    }
    result = Math.min(
      result,
      parseInt(map.get(unique[i]) / countmap.get(unique[i]))
    );
  }
  return result !== Number.MAX_VALUE ? result : 0;
};

let text = "leetcode"
console.log(maxNumberOfBalloons(text))