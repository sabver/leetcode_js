// https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let m = grid.length,
    n = grid[0].length,
    seen = new Array(m).fill(new Array(n).fill(false));
  let dfs = (curI, curJ) => {
    if (curI < 0 || curI >= n || curJ < 0 || curJ >= m) {
      return;
    }
    if (grid[curI][curJ] === 0) {
      return;
    }
    if (seen[curI][curJ]) {
      return;
    }
    seen[curI][curJ] = true;
    dfs(curI - 1, curJ);
    dfs(curI + 1, curJ);
    dfs(curI, curJ - 1);
    dfs(curI, curJ + 1);
  };
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!seen[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }
  console.log(seen)
  return count;
};
