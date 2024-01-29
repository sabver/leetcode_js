// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) {
    return 0;
  }
  let left = 0,
    set = new Set(),
    max = 1;
  set.add(s[0]);
  for (var right = 1; right < s.length; right++) {
    while (left <= right && set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
};
