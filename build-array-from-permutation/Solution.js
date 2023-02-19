// https://leetcode.com/problems/build-array-from-permutation

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let res = [];
    for (let i=0;i<nums.length;i++){
        res[i]=nums[nums[i]];
    }
    return res;
};