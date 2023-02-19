// https://leetcode.com/problems/finding-the-users-active-minutes

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function(logs, k) {
    let map = new Map();
    let i;

    for(i=0; i<logs.length; i++){

        if(map.has(logs[i][0])){
            map.set(logs[i][0],    map.get(logs[i][0]).add(logs[i][1]));
        }   
        else {
            map.set(logs[i][0], new Set().add(logs[i][1]));
        }   
    }
    let map2= new Map();
    let arr = Array.from(map.keys());

    for (i=0; i<arr.length;i++){
    // console.log(map(m).size);
    if(map2.has(map.get(arr[i]).size)){
        map2.set( map.get(arr[i]).size , map2.get(map.get(arr[i]).size)+1 );
    }
    else {
        map2.set( map.get(arr[i]).size, 1);
    }
    }

let res = new Array(k).fill(0);
for (let i=0; i<res.length ; i++){
    if (map2.has(i+1)){
        res[i]=map2.get(i+1);
    }
}

return res;
};