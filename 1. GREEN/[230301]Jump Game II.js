/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/jump-game-ii/
 *
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  let result = 0;
  let currentIndex = 0;

  while (currentIndex < nums.length - 1) {
    const j = nums[currentIndex];

    if (currentIndex + j >= nums.length - 1) {
      result += 1;
      break;
    }

    let max = 0;
    let maximumIndex = 0;

    for (let i = 1; i < j + 1; i++) {
      const next = i + nums[currentIndex + i];
      if (next > max) {
        max = next;
        maximumIndex = currentIndex + i;
      }
    }

    result += 1;
    currentIndex = maximumIndex;
  }

  return result;
};
