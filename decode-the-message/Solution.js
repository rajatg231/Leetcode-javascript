// https://leetcode.com/problems/decode-the-message

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let charCodeStart='a'.charCodeAt(0);
    let charCodeEnd='z'.charCodeAt(0);
    let s ="" ;
    let myMap = new Map();
     myMap.set( " " , " ")
    for(let i=0;i<key.length;i++){
       if(myMap.has(key[i])){  
               }
        else {
            myMap.set( key[i] , String.fromCharCode(charCodeStart))
            charCodeStart+=1;
        }
     }
    for (let j=0 ; j<message.length ;j++){
        s+= myMap.get(message[j])
        
    }
    return s;
    
    
};