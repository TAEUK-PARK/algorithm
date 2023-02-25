/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/integer-to-roman/
 * 
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
  let roman = "";

  const symbol = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  for (const [val, sym] of symbol) {
    while (num - val >= 0) {
      roman += sym;
      num -= val;
    }
  }

  return roman;
};
