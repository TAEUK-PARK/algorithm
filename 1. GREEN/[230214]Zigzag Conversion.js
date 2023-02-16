/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/zigzag-conversion/description/
 * 
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows === 1) return s;

  const result = new Array(numRows).fill("");

  let zigZag = 0;
  let isGrowing = true;

  Array.prototype.forEach.call(s, (value, index) => {
    result[zigZag] += value;

    if (index === 0) {
      zigZag += 1;
      return;
    }

    if (zigZag === numRows - 1 || zigZag === 0) {
      isGrowing = !isGrowing;
    }

    isGrowing ? zigZag += 1 : zigZag -= 1;
  });

  return result.join("");
};
