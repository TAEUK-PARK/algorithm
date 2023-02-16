/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/largest-number/
 * 
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const result = nums
    .sort((a, b) => {
      if (a === b) return 0;

      const stringA = a.toString();
      const stringB = b.toString();

      return Number(stringB + stringA) - Number(stringA + stringB);
    })
    .join("");

  return Number(result) ? result : "0";
};
