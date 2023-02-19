// https://leetcode.com/problems/valid-palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let starts = 'a'.charCodeAt(0);
    let ends = 'z'.charCodeAt(0);
    let startn = '0'.charCodeAt(0);
    let endn = '9'.charCodeAt(0);
    let str ="";
    for(let i = 0 ; i< s.length ;i++){
            if ((((s[i].charCodeAt(0))>=starts) && ((s[i].charCodeAt(0))<=ends)) ||
            (((s[i].charCodeAt(0))>=startn) && ((s[i].charCodeAt(0))<=endn))) {
                str+=s[i];
            }
        }
    if (str===""){
        for(let i = 0 ; i< s.length ;i++){
        if ((((s[i].charCodeAt(0))<=starts) && ((s[i].charCodeAt(0))>=endn)) ||
            ((s[i].charCodeAt(0)<=startn) || ((s[i].charCodeAt(0))>=ends))  &&  
           (s[i].charCodeAt(0)===" ".charCodeAt(0))) {
                str+=s[i];        
            }
    }
    }
        
    let left = 0;
    let right = str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false
        }
        left+=1;
        right-=1;
    }
    return true;
            
};