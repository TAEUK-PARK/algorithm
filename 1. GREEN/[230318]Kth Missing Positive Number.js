/**
 * 난이도: EASY
 * https://leetcode.com/problems/kth-missing-positive-number/
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findKthPositive = function (arr, k) {
  let count = 0;
  let index = 0;

  for (let i = 1; ; i++) {
    if (arr[index] !== i) {
      count += 1;
      if (count === k) return i;
    } else {
      index += 1;
    }
  }
};
