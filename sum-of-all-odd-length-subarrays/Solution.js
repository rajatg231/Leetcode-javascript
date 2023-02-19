// https://leetcode.com/problems/sum-of-all-odd-length-subarrays

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let res= 0; 
    arr.forEach(x => (res+=x));
    for (let i =0 ; i< arr.length ; i++){
        let j = 0
        for (j = i+3 ; j<= arr.length ; j+=2 ){
            
            (arr.slice(i,j).length) %2 !== 0 && arr.slice(i,j).forEach((x)=> res+=x)
        }
    }
    return res;
};