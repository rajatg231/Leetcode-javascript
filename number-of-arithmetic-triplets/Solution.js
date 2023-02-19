// https://leetcode.com/problems/number-of-arithmetic-triplets

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
  let res = 0;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (i = nums.length - 1; i >= 0; i--) {
    if (map.has(nums[i] - diff) && map.has(nums[i] - diff - diff)) {
      res += 1;
    }
  }
  return res;
};
