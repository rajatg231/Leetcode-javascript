// https://leetcode.com/problems/minimum-operations-to-make-array-equal

/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let i;
  let val = n;
  let sum = 0;
  if (n === 1) {
    return 0;
  }
  for (i = 0; i < n; i++) {
    sum += Math.abs(val - (2 * i + 1));
  }
  return sum / 2;
};
