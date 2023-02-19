// https://leetcode.com/problems/partition-labels

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let max=0;
    let res=[];
    let firstChar;
    let lastInd;
    let i;
    while(max<s.length){
        firstChar=s[max];
        lastInd = s.lastIndexOf(firstChar);
        i=s.indexOf(firstChar);
        while(i<lastInd){
         if(s.lastIndexOf(s[i])<=lastInd){
             i+=1;
         }
            else{
                lastInd=s.lastIndexOf(s[i]);
            }
             
        }
        res.push(lastInd-s.indexOf(firstChar)+1);
        max=lastInd+1;
    }
    return res;
    
};