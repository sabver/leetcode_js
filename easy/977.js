// https://leetcode.com/problems/squares-of-a-sorted-array/description/

// function sortedSquares(nums: number[]): number[] {
function sortedSquares(nums) {
  if (nums.length == 0) {
    return nums;
  }
  // nums[mid] < 0 and nums[mid + 1] >= 0
  let mid = -1;
  if (nums[0] < 0) {
    if (nums[nums.length - 1] < 0) {
      mid = nums.length - 1;
    } else {
      // binary search
      let left = 0,
        right = nums.length - 1;
      while (left <= right) {
        mid = Math.floor((left + right) / 2);
        console.log(mid, left, right, nums[mid]);
        if (nums[mid] < 0) {
          // bingo
          if (mid + 1 <= nums.length - 1 && nums[mid + 1] >= 0) {
            break;
          }
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }
  let result = [];
  let left = mid,
    right = mid + 1;
  while (result.length < nums.length) {
    let vl = -1,
      vr = -1;
    if (left >= 0) {
      vl = Math.pow(nums[left], 2);
    }
    if (right < nums.length) {
      vr = Math.pow(nums[right], 2);
    }
    if (vl != -1 && vr != -1) {
      if (vl < vr) {
        result.push(vl);
        left--;
      } else {
        result.push(vr);
        right++;
      }
    } else if (vl == -1 && vr != -1) {
      result.push(vr);
      right++;
    } else if (vl != -1 && vr == -1) {
      result.push(vl);
      left--;
    }
  }
  return result;
}

let nums = [-4, -1, 0, 3, 10];
// let nums = [-7,-3,2,3,11]
// let nums = [-7, -3, 2, 3, 11];
// let nums = [-1];
let result = sortedSquares(nums);
console.log(result);
