// https://leetcode.com/problems/equal-row-and-column-pairs/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let rowMap = new Map(),
    colMap = new Map(),
    rowStr = "",
    colStr = "",
    n = grid.length;
  for (let i = 0; i < n; i++) {
    rowStr = "";
    colStr = "";
    for (let j = 0; j < n; j++) {
      rowStr += grid[i][j] + ",";
      colStr += grid[j][i] + ",";
    }
    rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
    colMap.set(colStr, (colMap.get(colStr) || 0) + 1);
    console.log(rowStr, colStr);
  }
  let sum = 0;
  for (let key of rowMap.keys()) {
    if (colMap.has(key)) {
      sum += rowMap.get(key) * colMap.get(key);
    }
  }
//   console.log(rowMap);
//   console.log(colMap);
  return sum;
};

let grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];
console.log(equalPairs(grid));
