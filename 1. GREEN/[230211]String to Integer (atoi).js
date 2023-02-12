/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/string-to-integer-atoi/
 * 
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let result = "";

  while (s[0] === " ") {
    s = s.replace(" ", "");
  }

  if (s[0] === "-" || s[0] === "+") {
    result += s[0];
    s = s.replace(s[0], "");
  }

  while (s[0] === "0") {
    s = s.replace("0", "");
  }

  let i = 0;

  const isNumeric = (str) => {
    return !isNaN(str) && !isNaN(parseFloat(str));
  };

  while (i < s.length && isNumeric(s[i]) && result.length < 12) {
    result += s[i];
    i += 1;
  }

  if (i === 0) return 0;

  const resultNum = Number(result);
  const min = Math.pow(-2, 31);

  if (resultNum <= min) return min;

  const max = Math.pow(2, 31) - 1;

  if (resultNum >= max) return max;

  return resultNum;
};
