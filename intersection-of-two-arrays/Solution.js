// https://leetcode.com/problems/intersection-of-two-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let res = new Set();
   if(nums1.length>=nums2.length){
       arrMax = nums1;
       arrMin = nums2;
   }
    else{
        arrMax= nums2;
        arrMin= nums1;
    }
    let i;
    for(i=0; i<arrMin.length; i++){
        if(arrMax.indexOf(arrMin[i]) !== -1){
            res.add(arrMin[i])
        }
    }
    return Array.from(res);
    
};