/**
 * 난이도: EASY
 * https://leetcode.com/problems/filter-elements-from-array/
 *
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (fn(n, i)) result.push(n);
  }

  return result;
};
