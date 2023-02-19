// https://leetcode.com/problems/shuffle-string

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let sArr =new Array(s.length);
    for (let i = 0 ; i<sArr.length ;i++){
        sArr[indices[i]] = s[i];
    }
    return sArr.join("");
};