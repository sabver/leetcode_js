// https://leetcode.com/problems/dota2-senate/
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  let senates = senate.split("");
  let minNumber = {
    R: 0,
    D: 0,
  };
  let count = {
    R: 0,
    D: 0,
  };
  let curSenate = "";
  for (let i = 0; i < senates.length; i++) {
    curSenate = senates[i];
    // console.log("before", curSenate, 'min', minNumber, 'count', count);
    if (minNumber[curSenate] > 0) {
      minNumber[curSenate]--;
    } else {
      // 消灭过往的一个敌人
      if (curSenate === "D") {
        if (count.R > 0) {
          count.R--;
        } else {
          minNumber.R++;
        }
        count.D++;
      } else {
        if (count.D > 0) {
          count.D--;
        } else {
          minNumber.D++;
        }
        count.R++;
      }
    }
    console.log("after", curSenate, 'min', minNumber, 'count', count);
    console.log();
  }
  if (count.R === count.D) {
    return senates[0] === "R" ? "Radiant" : "Dire";
  }
  if (count.R > 0) {
    return "Radiant";
  } else {
    return "Dire";
  }
};

let senate = "DRRDRDRDRDDRDRDR";
console.log(predictPartyVictory(senate));
