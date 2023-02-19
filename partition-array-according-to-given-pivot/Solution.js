// https://leetcode.com/problems/partition-array-according-to-given-pivot

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let i;
    let left=[];
    let right = [];
    for(i=0 ; i<nums.length ; i++){
        if(nums[i]<pivot){
            left.push(nums[i]);
        }
        else if(nums[i]===pivot){
            right.unshift(nums[i]);
        }
        else{
            right.push(nums[i]);
        }
    }
    let res=[];
    res.push(...left);
    res.push(...right);
    return res;
    
};