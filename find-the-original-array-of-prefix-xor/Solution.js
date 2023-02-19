// https://leetcode.com/problems/find-the-original-array-of-prefix-xor

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let out = [];
    let i,temp;
    if(pref.length > 1){
        out[0]=pref[0];
        out[1]=pref[0]^pref[1];
    }
    else{
        return pref;
    }
    for(i=2 ; i<pref.length ; i++){
        out.push(pref[i]^pref[i-1]);
        }
        
    return out;
    
};