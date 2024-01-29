// https://leetcode.com/problems/number-of-provinces/
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  let flag = new Array(isConnected.length).fill(false),
    map = new Map(),
    edgeMap = new Map();
  count = 0;
  for (let i = 0; i < isConnected.length; i++) {
    map.set(i, count);
    if (!edgeMap.has(i)) {
      edgeMap.set(i, []);
    }
    for (let j = 0; j < isConnected[i].length; j++) {
      if (isConnected[i][j] === 1) {
        edgeMap.get(i).push(j);
      }
    }
  }
  let dfs = (curNode) => {
    flag[curNode] = true;
    map.set(curNode, count);
    let edges = edgeMap.get(curNode);
    for (let i = 0; i < edges.length; i++) {
      if (flag[edges[i]]) {
        continue;
      }
      dfs(edges[i]);
    }
  };
  for (let i = 0; i < isConnected.length; i++) {
    let curNode = i;
    if (map.get(curNode) > 0) {
      continue;
    }
    count++;
    dfs(curNode);
  }
  return count;
};
