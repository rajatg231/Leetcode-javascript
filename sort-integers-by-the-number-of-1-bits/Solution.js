// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let map = new Map();
    arr.sort((a,b)=>a-b);
    for(let i=0 ; i<arr.length ; i++){
        if (arr[i]===0){
            map.set(0,[arr[i]]);
        }
        else if (arr[i]===1){
            map.set(1,[arr[i]]);
        }
        else {
            let q = arr[i];
            let r;
            let bits = 0;
            
            while ( q >= 2 ){
                r=(q % 2);
                if (r!==0){
                    bits+=r;
                }
                q = (q-r)/2;
                if (q<2){
                    bits+=q;
                }               
            }
            if(map.has(bits)){
                map.set(bits,[...map.get(bits), arr[i]]);     
            }
            else{
                map.set(bits,[arr[i]]);
            }
                     
        } 
    }
    let keyArr = Array.from(map.keys());
    let resArr = [];
    keyArr.sort((a,b)=>a-b);
    for (let i=0 ; i<keyArr.length ; i++){
        resArr.push(map.get(keyArr[i]));
    }
    return resArr.flat(1);
};