// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let i;
  let res = 0;
  let map = new Map();
  for (i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  let map2 = new Map(map);
  for (i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      map2.set(t[i], map2.get(t[i]) - 1);
    } else if (map2.has(t[i])) {
      map2.set(t[i], map2.get(t[i]) + 1);
    } else {
      map2.set(t[i], 1);
    }
  }
  map2.forEach((values, keys) => (res += Math.abs(values)));
  return res / 2;
};
