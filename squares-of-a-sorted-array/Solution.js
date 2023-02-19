// https://leetcode.com/problems/squares-of-a-sorted-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr;
    arr = nums.map(x=>Math.pow(x,2));
    arr = arr.sort((a,b)=>a-b);
    return arr;
};