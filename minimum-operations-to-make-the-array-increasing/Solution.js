// https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let result = 0;
    if (nums.length ===1){
        return result;
    }
    else {
    for(let i=0; i<nums.length;i++){
        if((nums[i])>=(nums[i+1])){
            result= result+(nums[i]-nums[i+1])+1;
            nums[i+1]=nums[i]+1;
            
            
        }
        // else{
        //     temp = nums[i+1];
        // }
            
    }
    
    return result;
    }
    
    };