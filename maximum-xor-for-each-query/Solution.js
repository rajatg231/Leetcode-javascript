// https://leetcode.com/problems/maximum-xor-for-each-query

/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
  let xorArr = [];
  let i;
  let res = [];
  xorArr.push(nums[0]);
  xorArr.push(nums[0] ^ nums[1]);
  for (i = 2; i < nums.length; i++) {
    xorArr.push(xorArr[i - 1] ^ nums[i]);
  }
  let maxBit = Math.pow(2, maximumBit);
  let max = maxBit - 1;
  let tempMax;
  for (i = nums.length - 1; i >= 0; i--) {
    tempMax = xorArr[i] ^ max;
    res.push(tempMax);
  }
  return res;
};
