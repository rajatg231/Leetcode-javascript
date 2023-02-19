// https://leetcode.com/problems/percentage-of-letter-in-string

/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let reg = new RegExp(letter, "g"); 
    let res = s.match(reg);
    if(res!==null){
        return (Math.floor((res.length/s.length)*100));
    }
    else{
        return 0;
    }
   
};