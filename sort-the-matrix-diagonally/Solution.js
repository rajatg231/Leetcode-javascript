// https://leetcode.com/problems/sort-the-matrix-diagonally

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    if ((mat.length===1)||(mat[0].length===1)){
        return mat;
    }
      let i,j,k;
    // i=mat.length;
    // j=mat[0].length;
    let arr=[];
    for(k=0; k<mat.length; k++){
        i=k, j=0;
       while((i<mat.length)&&(j<mat[0].length)){
           arr.push(mat[i][j])
           i+=1;
           j+=1;
       }
        arr.sort((a,b)=>a-b);
        while((i>k)){
            mat[i-1][j-1] =  arr.pop();
            i-=1;
            j-=1;
        }
        arr=[];
    }
    
        for(k=0; k<mat[0].length; k++){
        i=0, j=k;
       while((j<mat[0].length) && (i<mat.length)){
           arr.push(mat[i][j]);
           i+=1;
           j+=1;
       }
        arr.sort((a,b)=>a-b);
        while(j>k){
            mat[i-1][j-1]=arr.pop();
            i-=1;
            j-=1;
        }
    }          
    return mat;     
};