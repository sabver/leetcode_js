// https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  let getDigitalNum = (num) => {
    let str = (num + "").split("");
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]);
    }
    // console.log("getDigitalNum", num, sum);
    return sum;
  };
  let map = new Map();
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let dn = getDigitalNum(nums[i]);
    if (map.has(dn) === false) {
      map.set(dn, []);
    } else {
      set.add(dn);
    }
    map.get(dn).push(nums[i]);
  }
  //   console.log(map);
  //   console.log(set);
  let max = -1;
  for (let key of map.keys()) {
    if (set.has(key)) {
      let arr = map.get(key).sort((a, b) => b - a);
      if (arr.length > 1) {
        max = Math.max(max, arr[0] + arr[1]);
      }
    }
  }
  return max;
};
let nums = [
  368, 369, 307, 304, 384, 138, 90, 279, 35, 396, 114, 328, 251, 364, 300, 191,
  438, 467, 183,
];
console.log(maximumSum(nums));
