// https://leetcode.com/problems/string-compression

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let iter = 0;
  for (let i = 0; i < chars.length; i++) {
    let val = chars[i];
    let s = chars[i];
    while (val === chars[i + 1]) {
      i += 1;
      s += chars[i];
    }
    let strLen = s.length;
    if (strLen === 1) {
      chars[iter] = s[0];
      i === chars.length - 1 ? (iter += 0) : (iter += 1);
    } else if (strLen > 0 && strLen < 10) {
      chars[iter] = s[0];
      iter += 1;
      chars[iter] = String(strLen);
      i === chars.length - 1 ? (iter += 0) : (iter += 1);
    } else if (strLen >= 10) {
      chars[iter] = s[0];
      iter += 1;
      let charLen = String(strLen);
      for (let k = 0; k < charLen.length; k++) {
        chars[iter] = charLen[k];
        k === charLen.length - 1 ? (iter += 0) : (iter += 1);
      }
      i === chars.length - 1 ? (iter += 0) : (iter += 1);
    }
  }
  if (chars.length === 1) {
    chars = chars;
    mainCharLen = chars.length;
  } else {
    chars = chars.slice(0, (iter + 1));
    mainCharLen = chars.length;
  }
  return iter+1 ;
};
