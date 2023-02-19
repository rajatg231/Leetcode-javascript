// https://leetcode.com/problems/pascals-triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res=[];
    if(numRows>=1){
        res.push([1]);
    }
    if(numRows>1){
        res.push([1,1]);
    }
    let i, temp;
    let l,r;
    for(i=2;i<numRows;i++){
        temp = [];
        l=0;
        r=res[i-1].length-1;
        temp.push(res[i-1][0]);
        while(l<r){
            temp.push(res[i-1][l] + res[i-1][l+1]);
            l+=1;
        }
        temp.push(res[i-1][r]);
        res.push(temp);
    }
    return res;
    
};