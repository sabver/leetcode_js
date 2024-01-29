// https://leetcode.com/problems/reverse-prefix-of-word/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let index = word.indexOf(ch);
  if (index === -1) {
    return word;
  }
  let arr = word.split("");
  let start = 0;
  for (let i = index; i >= 0; i--) {
    arr[start++] = word[i];
  }
  return arr.join("");
};

let word = "abcdefd",
  ch = "d";
console.log(reversePrefix(word, ch));
