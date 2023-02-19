// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let arr = n.toString().split('');
    let temp1 =1 ;let temp2 = 0;
    arr.forEach(x=>temp1*=Number(x))
    arr.forEach(x=>temp2+=Number(x))
    return temp1-temp2;
};