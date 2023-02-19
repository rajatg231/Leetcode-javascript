// https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let set= new Set(nums);
    let i;
    let temp;
    for(i=0 ; i<nums.length ; i++){
        temp = nums[i]+"";
        temp = temp.split("").reverse().join("");
        temp = Number(temp);
        set.add(temp);
    }
    return set.size;
};