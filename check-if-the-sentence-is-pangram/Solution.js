// https://leetcode.com/problems/check-if-the-sentence-is-pangram

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    if (sentence.length<26){
        return false;
    }
    let n = 'a'.charCodeAt(0);
    for (let i=0; i<26; i++){        
    let reg = new RegExp(String.fromCharCode(n+i));
        if( (sentence.search(reg)) ===-1  )
            {return false}
        
    }
    return true;
};