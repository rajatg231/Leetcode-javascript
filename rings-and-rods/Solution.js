// https://leetcode.com/problems/rings-and-rods

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let r="";
    let g="";
    let b="";
    
    for(let i=0; i<rings.length ; i++){
        if(rings[i]==="R"){
            i+=1;
            r+=rings[i];
        }
        else if(rings[i]==="G"){
            i+=1;
            g+=rings[i];
        }
        else if(rings[i]==="B"){
            i+=1;
            b+=rings[i];
        }
    }
    let minStr;
   if ((r.length<=g.length)&&(r.length<=b.length)){
       minStr = r;
   }
    else if ((g.length<=r.length)&&(g.length<=b.length)){
       minStr = g;
   }
    else {
       minStr = b;
   }
    minStr = minStr.split("").sort().join("");
    let res=0;
    for(let i=0; i<minStr.length; i++){
        let reg = new RegExp(minStr[i]);
        if((r.search(reg) !== -1)  &&  (b.search(reg) !== -1) && (g.search(reg) !== -1) && (minStr[i]!==minStr[i+1])){
            res+=1;
        }
    }    
    return res;
};