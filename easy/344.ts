// https://leetcode.com/problems/reverse-string/description/

console.log("test");

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left = 0,
    right = s.length - 1;
  let temp = "";
  while (left < right) {
    temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}
