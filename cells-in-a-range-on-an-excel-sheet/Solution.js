// https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let c1= s[0].charCodeAt(0);
    let c2= s[3].charCodeAt(0);
    let result = [];
    for(let i=c1 ; i<=c2; i++){
        for(let j=Number(s[1]) ; j<=Number(s[4]);j++){
            result.push( String.fromCharCode(i)+j )
        }
    }
    return result;
};