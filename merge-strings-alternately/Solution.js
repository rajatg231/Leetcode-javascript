// https://leetcode.com/problems/merge-strings-alternately

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let s = "";
    let len;
    (word1.length > word2.length)? (len = word1.length) : (len = word2.length);
    for(let i=0 ; i<len ; i++){
        if(word1[i]!==undefined){
            s+=word1[i]
        }
        if(word2[i]!==undefined){
            s+=word2[i]
        }
    }
    return s;
};