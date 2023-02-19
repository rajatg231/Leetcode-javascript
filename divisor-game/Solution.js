// https://leetcode.com/problems/divisor-game

/**
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function(n) {
    if(n===2){
        return true;
    }
    let A=0;
    let B=0;
    let i=0;
    let x;
    while(n>=2){
    if(n%2===0){
        x = 1;
        n= n-x;
        (i%2===0)? A+=1 : B+=1;
        i+=1;
    }
        else if(n===2){
            (i%2===0) ? A+=1 : B+=1;
        } 
        else {
            x=1;
            n=n-x;
            (i%2===0)? A+=1 : B+=1;
            i+=1;
        }
    }
    return A>B;
    
};