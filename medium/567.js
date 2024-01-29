// https://leetcode.com/problems/permutation-in-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) {
    return false;
  }
  let check = (s1map, s2map) => {
    console.log(s1map);
    console.log(s2map);
    for (let key of s1map.keys()) {
      if (s1map.get(key) !== s2map.get(key) || 0) {
        return false;
      }
    }
    return true;
  };
  let s1map = new Map(),
    s2map = new Map();
  for (let i = 0; i < s1.length; i++) {
    s1map.set(s1[i], (s1map.get(s1[i]) || 0) + 1);
    s2map.set(s2[i], (s2map.get(s2[i]) || 0) + 1);
  }
  for (let i = 0; i < s2.length - s1.length; i++) {
    if (check(s1map, s2map)) {
      return true;
    }
    let tail = s2[i + s1.length],
      head = s2[i];
    s2map.set(tail, (s2map.get(tail) || 0) + 1);
    s2map.set(head, (s2map.get(head) || 0) - 1);
  }
  return check(s1map, s2map);
};

let permute = function (str) {
  let used = new Array(str.length).fill(false);
  let track = [];
  let res = [];
  var backtrack = (track, used) => {
    if (track.length === str.length) {
      res.push([...track]);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      if (used[i] === true) {
        continue;
      }
      track.push(str[i]);
      used[i] = true;
      backtrack(track, used);
      track.pop();
      used[i] = false;
    }
  };
  backtrack(track, used);
  return res;
};

let s1 = "ab",
  s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));
// let str = "abc",
//   list = [];
// console.log(permute(str));
