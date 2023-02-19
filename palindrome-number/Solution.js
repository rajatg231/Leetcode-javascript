// https://leetcode.com/problems/palindrome-number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = String(x);
    let strLen = str.length ;
    let left = 0;
    let right = strLen-1;
    while(left<right){
        if (str[left]===str[right]){
            left+=1;
            right-=1;
            
        }
        else{return false}
    
    }
    return true;
};