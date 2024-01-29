// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {}, res = []
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }    
    for(let i = 0; i < nums.length; i++) {
        if( target - nums[i] in map && map[target - nums[i]] !== i ){
            res.push(map[target - nums[i]])
            res.push(i)
            break
        }
    }
    return res
};

let nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))