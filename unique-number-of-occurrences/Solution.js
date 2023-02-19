// https://leetcode.com/problems/unique-number-of-occurrences

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map= new Map();
    let i;
    for(i=0 ; i<arr.length ; i++){
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1);
        }
        else{
            map.set(arr[i],1);
        }
    }
    let arr1 = Array.from(map.values());
    let set = new Set(arr1);
    return (set.size===map.size);
};