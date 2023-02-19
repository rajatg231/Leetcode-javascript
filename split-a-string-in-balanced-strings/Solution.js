// https://leetcode.com/problems/split-a-string-in-balanced-strings

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let left = 0;
    let right = 0;
    for (let i = 0 ; i< s.length ; i++){
        if (s[i]==="L"){
            left+=1;
        }
        else if (s[i]==="R"){
                 right+=1;
                 }
        if (left===right){
            count+=1;
            left = 0;
            right = 0;
        }
    }
    return count;
};