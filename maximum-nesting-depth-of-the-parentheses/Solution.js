// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let c = 0;
    let count =0;
    for (let i = 0 ; i<s.length ; i++ ){
        ( s[i]==="(" ) && (count+=1);
        ( s[i]===")" ) && (count-=1) ;
        c> count ? c=c : c=count;      
    }
    return c;
};