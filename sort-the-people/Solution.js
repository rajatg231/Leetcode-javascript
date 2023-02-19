// https://leetcode.com/problems/sort-the-people

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
   let map =new Map();
    for (let i = 0 ; i<heights.length ; i++){
        map.set(heights[i], names[i]);
    }
    heights = heights.sort((a,b)=>a-b).reverse();
    for (let i = 0 ; i<heights.length ; i++){
        heights[i] = map.get(heights[i]);
    }
    return heights;
};