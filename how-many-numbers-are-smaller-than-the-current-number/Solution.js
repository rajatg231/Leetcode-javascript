// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result=[];
    let sortNum=[];
    sortNum = nums.slice();
    sortNum.sort((a,b)=>a-b);
    for(let i=0; i<nums.length ; i++){
        let j=0;
        while(nums[i]>sortNum[j]){
            j+=1;
        }
        result.push(j);
    }
    return result;
};