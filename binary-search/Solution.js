// https://leetcode.com/problems/binary-search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let mid = [Math.floor(nums.length/2)]
    if (nums[mid]>target){
        for (let i=mid ; i>=0 ;i--){
            if (target === nums[i]){
                return i
                break
            }
        }
        return -1
    }
    else if (nums[mid]<target){
        for (let i=mid ; i<(nums.length) ;i++){
            if (target === nums[i]){
                return i
                break
            }
        }
        return -1

    }
    else if (nums[mid] ===target){
        return mid}
    else {return -1}
};