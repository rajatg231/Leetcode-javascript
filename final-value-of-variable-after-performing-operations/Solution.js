// https://leetcode.com/problems/final-value-of-variable-after-performing-operations

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let res = 0;
    for(let i=0;i<operations.length;i++){
        if ((operations[i]==="++X") || (operations[i]==="X++")){
            res +=1;
            }
        else if((operations[i]==="--X") || (operations[i]==="X--")){
            res -=1;
            } 
    }
    return res;
};