// https://leetcode.com/problems/a-number-after-a-double-reversal

/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    num = ""+num;
    
    if (num.search(/[1-9]/) === -1){
        return true;
    }
    if((num[0]==="0")|| (num[num.length-1]==="0")){
        return false;
    }
    else{
        return true;
    }
};