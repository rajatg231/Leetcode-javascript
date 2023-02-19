// https://leetcode.com/problems/unique-morse-code-words

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let map = new Map();
    let s = 'a'.charCodeAt(0);
    let arr = [".-","-...","-.-.","-..",".",
               "..-.","--.","....",
               "..",".---","-.-",".-..","--",
               "-.","---",".--.","--.-",".-.",
               "...","-","..-","...-",".--","-..-",
               "-.--","--.."]
    
    for (i= 0; i<26; i++){
        map.set(String.fromCharCode(s+i) ,arr[i]   );
        
    }
    let setArr = new Set();
    for (let j = 0 ; j<words.length ; j++) {
        let w = "";
        for (let k = 0 ; k<words[j].length ; k++){
            w += map.get(words[j][k]);
            
        }
        setArr.add(w);
        
    }
    return setArr.size;
};