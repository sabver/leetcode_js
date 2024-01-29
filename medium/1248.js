// https://leetcode.com/problems/count-number-of-nice-subarrays/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let counts = new Map();
    counts.set(0, 1);
    let ans = 0, curr = 0;
    
    for (const num of nums) {
        curr += num % 2;        
        ans += counts.get(curr - k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1);
        // console.log(curr, ans, counts)
    }
    
    return ans;
};

let nums = [2,2,2,1,2,2,1,2,2,2], k = 2
console.log(numberOfSubarrays(nums, k))