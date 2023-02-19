// https://leetcode.com/problems/find-triangular-sum-of-an-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
     let j;
    while(nums.length!==1){
    j=0;
    while(nums[j+1]!==undefined){
        nums[j]=(nums[j]+nums[j+1])%10;
        j+=1;
    }
    nums.pop();
    }
    return nums[0];
    
    
};