// https://leetcode.com/problems/fibonacci-number

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    function F(n){
        if (n===1){
            return 1;
        }
        else if(n<1){
            return 0;
        }
        else if(n>=2){
            return (F(n-1)+F(n-2));
        }
    }
    return F(n);
};