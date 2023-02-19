// https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  let i, j;
  let res = [];
  let temp = 0;
    let sumx;
    let sumy;
  for (i = 0; i < queries.length; i++) {
    for (j = 0; j < points.length; j++) {
      if (
        (points[j][0] === queries[i][0] + queries[i][2] ||
          points[j][0] === queries[i][0] - queries[i][2]) &&
        points[j][1] === queries[i][1]
      ) {
        temp += 1;
      } else if (
        (points[j][1] === queries[i][1] + queries[i][2] ||
          points[j][1] === queries[i][1] - queries[i][2]) &&
        points[j][0] === queries[i][0]
      ) {
        temp += 1;
      }
        else{
            sumx = Math.pow(( queries[i][0] - points[j][0] ),2);
            sumy = Math.pow( (queries[i][1] - points[j][1] ),2 )
            if(Math.sqrt(sumx+sumy) <= queries[i][2]){
                temp+=1;
            }
                }
        
    }
    res.push(temp);
    temp = 0;
  }

  return res;
};
