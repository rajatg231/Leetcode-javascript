// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let res=0;
    let i;
    let temp;
    for(i=0 ; i<s.length-2 ; i++){
       temp =  s.slice(i,i+3);
        if(( temp[0]!== temp[1] ) && ( temp[1]!==temp[2] ) && ( temp[0]!== temp[2]) ){
            res+=1;
        }
    }
    return res;
//     let temp = new Set();
//     for(i=0 ; i<s.length-2 ; i++){
//         temp.add(s[i]);
//         temp.add(s[i+1]);
//         temp.add(s[i+2]);
//         if(temp.size === 3){
//             res+=1;
//         }
//         temp.clear();
//     }
//     return res;
};