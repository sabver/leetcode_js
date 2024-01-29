// https://leetcode.com/problems/reverse-only-letters/
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let letters = "abcdefghijklmnopqrstuvwxyz";
  let letters2 = letters.toUpperCase();
  let array = letters.split("").concat(letters2.split(""));
  let set = new Set(array);
  // console.log(letters.length, array, array.length, set)
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push("");
  }
  let left = 0,
    right = s.length - 1;
  let head = "",
    tail = "";
  while (left <= right) {
    head = s[left];
    tail = s[right];
    if (left === right) {
      result[left] = head;
      break;
    }
    if (set.has(head) && set.has(tail)) {
      // exchange
      result[left] = tail;
      result[right] = head;
      left++;
      right--;
    } else if (set.has(head) && !set.has(tail)) {
      // move right
      result[right] = tail;
      right--;
    } else if (!set.has(head) && set.has(tail)) {
      // move left
      result[left] = head;
      left++;
    } else {
      result[left] = head;
      result[right] = tail;
      left++;
      right--;
    }
  }
  return result.join("");
};

console.log(reverseOnlyLetters("ab-cd"));
