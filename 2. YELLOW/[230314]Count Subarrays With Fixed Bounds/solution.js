/**
 * 난이도: HARD
 * https://leetcode.com/problems/count-subarrays-with-fixed-bounds/
 *
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
const countSubarrays = function (nums, minK, maxK) {
  let startIndex = null;
  let minIndex = null;
  let maxIndex = null;
  let subarraysCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (n < minK || n > maxK) {
      startIndex = null;
      minIndex = null;
      maxIndex = null;
    } else {
      if (startIndex === null) startIndex = i;
      if (n === minK) minIndex = i;
      if (n === maxK) maxIndex = i;
      if (minIndex !== null && maxIndex !== null) {
        const rangeStart = Math.min(minIndex, maxIndex);
        const prev = rangeStart - startIndex + 1;

        subarraysCount += prev;
      }
    }
  }

  return subarraysCount;
};
