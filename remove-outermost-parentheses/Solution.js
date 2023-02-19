// https://leetcode.com/problems/remove-outermost-parentheses

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = "";
    let s1="";
    let left=0;
    let right=0;
    for(let i=0 ; i<s.length;i++){
         s1+= s[i];
        if (s[i]==="("){
            left+=1;
        }
        else if(s[i]===")"){
            right+=1;
        }
        if (left===right){
            res+= s1.slice(1,(s1.length-1));
            s1 = "";
        }
    }
    return res;
};