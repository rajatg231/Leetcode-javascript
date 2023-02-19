// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCan = Math.max(...candies);
    let result = [];
    for (let i = 0 ; i<candies.length ; i++){
        result.push((candies[i]+extraCandies)>=maxCan)
    }
    return result;
};