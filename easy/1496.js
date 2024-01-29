// https://leetcode.com/problems/path-crossing/
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let result = [0, 0],
    set = new Set();
  // set saved path track
  set.add("0,0");
  let move = (cur, direction) => {
    // console.log("move before", cur, direction);
    switch (direction) {
      case "N":
        cur[1] = cur[1] + 1;
        break;
      case "E":
        cur[0] = cur[0] + 1;
        break;
      case "S":
        cur[1] = cur[1] - 1;
        break;
      case "W":
        cur[0] = cur[0] - 1;
        break;
    }
    // console.log("move after", cur, direction);
  };
  let flag = false,
    track = "";
  for (let i = 0; i < path.length; i++) {
    move(result, path[i]);
    track = result[0] + "," + result[1];
    if (set.has(track)) {
      flag = true;
      break;
    }
    set.add(track);
  }
  return flag;
};

let path = "NNSWWEWSSESSWENNW";
console.log(isPathCrossing(path));
