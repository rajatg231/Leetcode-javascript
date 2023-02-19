// https://leetcode.com/problems/decode-xored-array

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let result = [first];
    for(let i = 0 ; i<encoded.length ;i++){
        first = first ^ encoded[i];
        result.push(first);
    }
    return result;   
    
};