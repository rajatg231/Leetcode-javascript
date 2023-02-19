// https://leetcode.com/problems/max-increase-to-keep-city-skyline

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let res = 0;
  let i, j;
  let rmax = 0;
  let cmax = 0;
  let rmaxArr = [];
  let cmaxArr = [];
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      rmax <= grid[i][j] ? (rmax = grid[i][j]) : (rmax = rmax);
      cmax <= grid[j][i] ? (cmax = grid[j][i]) : (cmax = cmax);
    }
    rmaxArr.push(rmax);
    cmaxArr.push(cmax);
    rmax = 0;
    cmax = 0;
  }
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      rmaxArr[i] <= cmaxArr[j]
        ? (res += rmaxArr[i] - grid[i][j])
        : (res += cmaxArr[j] - grid[i][j]);
    }
  }
  return res;
};
