/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/number-of-zero-filled-subarrays/
 *
 * @param {number[]} nums
 * @return {number}
 */
const zeroFilledSubarray = function (nums) {
  let count = 0;
  let result = 0;

  for (const num of nums) {
    if (num === 0) {
      count += 1;
      result += count;
    } else {
      if (count) {
        count = 0;
      }
    }
  }

  return result;
};
