// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let result=0;
    while(num!=0){
        result+=1;
        if (num%2===0){
            num=num/2;
        }
        else{
            num-=1;
        }
    }return result;
};