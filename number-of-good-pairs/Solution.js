// https://leetcode.com/problems/number-of-good-pairs

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let sortArr = nums.sort();
    let result  = 0;
    let elem1 = sortArr[0];
    let firstIndex = sortArr.indexOf(elem1);
    let lastIndex = sortArr.lastIndexOf(elem1);
    let val =lastIndex-firstIndex+1;
    ((firstIndex!==lastIndex) && (val>=2))?   result += (fact(val)/((fact(val-2))*2)): result+=0;
    while (lastIndex!==(sortArr.length-1)){
        elem1 = sortArr[lastIndex+1];
        firstIndex = sortArr.indexOf(elem1);
        lastIndex = sortArr.lastIndexOf(elem1);
        let val =lastIndex-firstIndex+1;
        ((firstIndex!==lastIndex) && (val>=2))? result += (fact(val)/((fact(val-2))*2)) :result+=0 ;    
    }
    function fact(n){
        if (n<=1){
            return 1;
        }
        else {return n*fact(n-1)}
    }
    return result;    
};
