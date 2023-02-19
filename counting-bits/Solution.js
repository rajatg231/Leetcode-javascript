// https://leetcode.com/problems/counting-bits

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res =[];
    let i=0;
    while(i<=n){
       res.push(i.toString(2).split('1').length-1);
        i+=1
}
    return res;
};
