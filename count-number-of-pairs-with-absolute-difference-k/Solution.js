// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let map = new Map();
    let res=0;
    
    for (let i = 0 ; i<nums.length ; i++){
        if (map.has(nums[i])){
        map.set(nums[i],(map.get(nums[i])+1));    
        }
        else{
            map.set(nums[i],1)
        }    
    }
    for (let j = 0 ; j<nums.length ; j++){
        if (map.has(nums[j]+k)){
         res+= map.get(nums[j]+k);
        }
    }
    return res;
    
    
};