// https://leetcode.com/problems/sort-characters-by-frequency/
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map(),
    revmap = new Map();
  for (var i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  let revKey = "";
  for (let key of map.keys()) {
    revKey = map.get(key);
    if (revmap.has(revKey) === false) {
      revmap.set(revKey, []);
    }
    revmap.get(revKey).push(key);
  }
  // sort frequency list
  let frearr = [];
  for (let key of revmap.keys()) {
    frearr.push(key);
  }
  frearr.sort((a, b) => b - a);
  //   console.log(map);
  //   console.log(revmap);
  //   console.log(frearr);
  let result = [],
    arr = [];
  for (let i = 0; i < frearr.length; i++) {
    arr = revmap.get(frearr[i]);
    for (let j = 0; j < arr.length; j++) {
      for (let k = 1; k <= frearr[i]; k++) {
        result.push(arr[j]);
      }
    }
  }
  return result;
};

let s = "Aabb";
console.log(frequencySort(s));
