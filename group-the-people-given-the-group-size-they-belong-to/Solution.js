// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let i;
    let res=[];
    let lth=0;
    let map=new Map();
    for(i=0; i<groupSizes.length; i++){
        if(map.has(groupSizes[i])){
            map.set(groupSizes[i], [...map.get(groupSizes[i]), i]);
        }
        else{
            map.set(groupSizes[i], [i]);
        }
    }
    map.forEach((value,key)=> {if(value.length >= lth ){
        while(value.length> lth){
        res.push(value.slice(lth,lth+key));
        lth+=key;
        }
    }
    else{
        res.push(value);
        }
        lth=0; });

    return res;
};