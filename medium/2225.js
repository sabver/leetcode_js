// https://leetcode.com/problems/find-players-with-zero-or-one-losses/description/
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  // loswer mapping
  let lmap = new Map(),
    winner,
    loser,
    max = 0;
  let answer0 = [],
    answer1 = [];
  for (let i = 0; i < matches.length; i++) {
    winner = matches[i][0];
    loser = matches[i][1];
    max = Math.max(max, winner);
    max = Math.max(max, loser);
    lmap.set(winner, lmap.get(winner) || 0);
    lmap.set(loser, (lmap.get(loser) || 0) + 1);
  }
  for (let i = 1; i <= max; i++) {
    if (lmap.has(i) && lmap.get(i) === 0) {
      answer0.push(i);
    }
    if (lmap.has(i) && lmap.get(i) === 1) {
      answer1.push(i);
    }
  }

  return [answer0, answer1];
};
