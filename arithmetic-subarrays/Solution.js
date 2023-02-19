// https://leetcode.com/problems/arithmetic-subarrays

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let a,diff,left,right;
    let res=[];
    function isAr(arr){
        diff=arr[1]-arr[0];
        left=0;
        right=arr.length-1;
        while(left<right){
            if((diff===(arr[left+1]-arr[left]))&&(diff===(arr[right]-arr[right-1]))){
                left+=1;
                right-=1;
            }
            else{
                res.push(false);
                break;
            }
        }
        left>=right && res.push(true);
    }
    let i,numsArray;
    for(i=0; i<l.length; i++){
        numsArray = nums.slice(l[i],r[i]+1);
        numsArray.sort((a,b)=> a-b);
        isAr(numsArray);
    }
    return res;
};