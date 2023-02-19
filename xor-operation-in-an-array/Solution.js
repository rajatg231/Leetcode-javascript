// https://leetcode.com/problems/xor-operation-in-an-array

/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = [];
    arr[0] = start;
    let res = start;
    let i = 0;
    while(n>i+1){
        arr[i+1] = arr[i]+2;
        res = res^arr[i+1];
        i+=1;
}
    return res;
        
        };