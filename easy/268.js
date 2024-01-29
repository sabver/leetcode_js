// https://leetcode.com/problems/missing-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let n = nums.length
  let set = new Set(nums)
  for(let i = 0; i <= n; i++) {
    if( !set.has(i) ){
        return i
    }
  }  
  return -1
};