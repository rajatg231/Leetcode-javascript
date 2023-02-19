// https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    // return (n.split("").sort()[n.length-1]);
    let i;
    let j;
    let re;
    for(i=9;i>=0;i--){
        j=""+i;
        re = new RegExp(j);
        if(n.search(re)!==-1){
            return i;
        }
    }
};