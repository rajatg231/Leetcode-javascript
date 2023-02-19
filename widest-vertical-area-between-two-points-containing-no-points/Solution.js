// https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let arr=[];
    let max=0;
    let i;
    for(i=0; i<points.length ; i++){
        arr[i] = points[i][0];
    }
    arr.sort((a,b)=> a-b);
    for(i=0 ; i<arr.length-1 ; i++){
       max<(arr[i+1]-arr[i]) ? (max= arr[i+1]-arr[i]) : max=max;
    }
    
    return max;
};