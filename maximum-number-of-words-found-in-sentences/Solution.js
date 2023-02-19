// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let len = sentences.length;
    let result = 0 ;
    for (let i=0 ; i<len ; i++){
        let sen = sentences[i];
        let senLen = sen.split(" ").length;
        (result>=senLen) ? result= result : result=senLen ; 
    }
    return result
    
};