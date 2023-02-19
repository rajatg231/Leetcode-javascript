// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let i,j;
    let res=[];
    let temp=0;
    for(i=0;i<boxes.length;i++){
        for(j=0; j<boxes.length ; j++){
            temp += Math.abs(boxes[j]*-(j-i));
            
        }
            res.push(temp);
        temp=0;
    }
    
    return res;
};
