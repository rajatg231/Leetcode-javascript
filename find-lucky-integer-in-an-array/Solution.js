// https://leetcode.com/problems/find-lucky-integer-in-an-array

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let i,temp;
    let max=0;
    let map = new Map();
    
    for(i=0;i<arr.length;i++){
        if(map.has(arr[i])){
           map.set(arr[i], map.get(arr[i])+1);
           }
        else{
            map.set(arr[i],1);
        }
    }
    map.forEach((values,keys)=> (keys===values) && (temp = keys, (max<temp)? (max=temp) : (max=max)))
    if(max!==0){
        return max;
    }
    else{
        return -1;
    }
    
};