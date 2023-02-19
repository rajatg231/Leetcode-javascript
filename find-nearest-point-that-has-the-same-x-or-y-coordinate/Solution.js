// https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    // let index =[];
    let mdis = -1;
    let ind = -1;
    for (let i=0; i<points.length ; i++){
        if(  ((points[i][0]===x) || (points[i][1]===y)) 
           && ((points[i][0]>=x)||(points[i][1]>=y)) ){
           let temp = Math.abs(x-points[i][0])+Math.abs(y-points[i][1]);
            if (mdis === -1){
                mdis = temp;
                ind = i;
            }
            else{
                if(mdis>temp){
                    mdis = temp;
                    ind =i;
                    // index=[];
                }
                // else if(mdis=== temp){
                //     mdis=temp;
                //     index.push(ind);
                //     index.push(i);
                //     ind = index[0];
                // }
            }
           }
    }
    if (ind!==-1){
        return ind;
    }
    else {
        return -1;
    }   
  };