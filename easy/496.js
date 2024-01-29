// https://leetcode.com/problems/next-greater-element-i/description/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let arr = new Array(nums2.length).fill(-1),
    result = new Array(nums1.length).fill(-1),
    map = new Map();
  for (let i = 0; i < nums2.length; i++) {
    map.set(nums2[i], i);
  }
  // 存nums2的index
  let queue = [];
  for (let i = 0; i < nums2.length; i++) {
    // 构建单调递减的队列
    while (queue.length > 0 && nums2[queue[queue.length - 1]] < nums2[i]) {
      let popIndex = queue.pop();
      arr[popIndex] = i;
    }
    queue.push(i);
  }
  for (let i = 0; i < nums1.length; i++) {
    let index = map.get(nums1[i]);
    if (arr[index] !== -1) {
      result[i] = nums2[arr[index]];
    }
  }
  return result;
};

let nums1 = [2, 4],
  nums2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1, nums2));
