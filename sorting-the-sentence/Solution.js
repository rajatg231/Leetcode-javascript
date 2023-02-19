// https://leetcode.com/problems/sorting-the-sentence

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let res = [];
    let arr = s.split(" ");
    for (let i = 0 ; i < arr.length ; i++){
        res[(arr[i][arr[i].length-1])-1]=arr[i].slice(0,(arr[i].length-1));
    }
    return res.join(" ");
    
};