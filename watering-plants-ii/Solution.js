// https://leetcode.com/problems/watering-plants-ii

/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
  let l = 0;
  let r = plants.length - 1;
  let res = 0;
  let cA = capacityA;
  let cB = capacityB;

  while (l < r) {
    if (cA < plants[l]) {
      res += 1;
      cA = capacityA;
      cA = cA - plants[l];
      l += 1;
    } else {
      cA = cA - plants[l];
      l += 1;
    }
    if (cB < plants[r]) {
      res += 1;
      cB = capacityB;
      cB = cB - plants[r];
      r -= 1;
    } else {
      cB = cB - plants[r];
      r -= 1;
    }
  }
  if (plants[l] > cA && l === r && plants[r]>cB) {
    res += 1;
  }
  return res;
};
