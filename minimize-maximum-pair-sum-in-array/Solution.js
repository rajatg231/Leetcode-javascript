// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let temp=0;
    let max=0;
    let l=0;
    let r=nums.length-1;
    while(l<r){
        temp=nums[l]+nums[r];
        l+=1;
        r-=1;
        max<temp ? max=temp : max=max;
        
    }
    return max;
};