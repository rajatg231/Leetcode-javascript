// https://leetcode.com/problems/decompress-run-length-encoded-list

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];
    for (let i = 0 ; i<nums.length ;i++){
        let j=0;
        while(j<nums[2*i]){
            j+=1;
            result.push(nums[(2*i)+1])
        }
    }
    return result;
};