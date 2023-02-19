// https://leetcode.com/problems/two-sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
      for(let i = 0; i<nums.length;i++){
        num1 = nums[i];
        num2 = target - num1;
        if ((nums.includes(num2))&& (i!=nums.indexOf(num2)) ){
            return [i, nums.indexOf(num2)]
        }
      }
};