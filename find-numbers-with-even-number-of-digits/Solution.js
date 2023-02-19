// https://leetcode.com/problems/find-numbers-with-even-number-of-digits

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let res=0;
    for (let i = 0 ; i< nums.length ; i++){
        let s = "";
        s+= nums[i];
        if (s.length%2===0){
            res+=1;
        }
    }
    return res;
    
};