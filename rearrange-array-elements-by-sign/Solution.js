// https://leetcode.com/problems/rearrange-array-elements-by-sign

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
//     let i,j;
//     j=0;
//    function shiftArray(i,j,nums){
//         let k, temp;
//         temp = nums[j];
//         for(k=j;k>i;k--){
//             nums[k]=nums[k-1];
//         }
//         nums[i]=temp;
//         return nums;
//     }

//     for(i=0; i<nums.length ; i++){
//         if(i===0){
//             while(nums[j]<0){
//                 j+=1;
//             }
//             shiftArray(i,j,nums);
//             j=0;
//         }
//         else if((i%2)===0){
//             j=i;
//             while(nums[j]<0){
//                 j+=1;
//             }
//             shiftArray(i,j,nums);
//             j=0;
//         }
//         else if((i%2)!==0){
//             j=i;
//             while(nums[j]>0){
//                 j+=1;
//             }
//             shiftArray(i,j,nums);
//             j=0;
//         }
//     }

//     return nums;
    let res= [];
    let pos=0;
    let neg = 1;
    let i;
    for(  i=0;i<nums.length;i++){
        if(nums[i]>0){
            res[pos]=nums[i];
            pos+=2;
        }
        if(nums[i]<0){
            res[neg]=nums[i];
            neg+=2;
        }
    }
    return res;

};