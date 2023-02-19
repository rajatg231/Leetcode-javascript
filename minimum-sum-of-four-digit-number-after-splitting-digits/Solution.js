// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let strNum = String(num);
    let strArr = strNum.split("");
    let sortStr = strArr.sort();
    let num1 = ((Number(sortStr[0])*10)+(Number(sortStr[2]))) ; 
    let num2 = ((Number(sortStr[1])*10)+(Number(sortStr[3]))) ;
    return num1+num2;      
};