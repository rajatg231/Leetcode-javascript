// https://leetcode.com/problems/jewels-and-stones

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let result = 0;
    stones = stones.split("").sort().join("");
    for (let i = 0 ; i< jewels.length ; i++){
        if(j=stones.indexOf(jewels[i])!== -1){
            let firstInd = stones.indexOf(jewels[i]) ;
            let lastInd = stones.lastIndexOf(jewels[i]);
            result += lastInd-firstInd+1;
        }
    }
    return result;
};