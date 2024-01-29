// https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz",
    map = {};
  for (let i = 0; i < alphabet.length; i++) {
    map[alphabet[i]] = 1;
  }
  let count = alphabet.length;
  for (let i = 0; i < sentence.length; i++) {
    if (map[sentence[i]] === 1) {
      count--;
      map[sentence[i]] = 0;
    }
  }
  return count === 0;
};

let sentence = "thequickbrownfoxjumpsoverthelazydog"
console.log(checkIfPangram(sentence))