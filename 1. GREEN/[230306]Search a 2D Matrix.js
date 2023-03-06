/**
 * leetcode problem link: https://leetcode.com/problems/search-a-2d-matrix
 *
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + right);
    const row = matrix[mid];

    if (row[0] > target) {
      right = mid - 1;
      continue;
    }

    if (row.at(-1) < target) {
      left = mid + 1;
      continue;
    }

    left = 0;
    right = row.length - 1;

    while (left <= right) {
      const mid = Math.floor(left + right);
      const value = row[mid];

      if (value === target) return true;
      if (value < target) {
        left = mid + 1;
        continue;
      }
      if (value > target) {
        right = mid - 1;
        continue;
      }
    }

    return false;
  }

  return false;
};
