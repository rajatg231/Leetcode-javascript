// https://leetcode.com/problems/shuffle-the-array

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let len = nums.length;
    let result = [];
    let i =0;
    while(n<len){
        result.push(nums[i]);
        result.push(nums[n]);
        i+=1;
        n+=1;
    }
    
    return result
};