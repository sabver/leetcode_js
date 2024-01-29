// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let set = new Set(["a", "e", "i", "o", "u"]);
  let max = 0,
    sum = 0;
  for (let i = 0; i < k; i++) {
    if (set.has(s[i])) {
      sum++;
    }
  }
  max = sum;
  for (let right = k; right < s.length; right++) {
    if (set.has(s[right - k])) {
      sum--;
    }
    if (set.has(s[right])) {
      sum++;
    }
    max = Math.max(max, sum);
  }
  return max;
};

let s = "abciiidef",
  k = 3;
console.log(maxVowels(s, k));
