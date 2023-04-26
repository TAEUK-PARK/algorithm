/**
 * 난이도: EASY
 * https://leetcode.com/problems/array-reduce-transformation/
 *
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
  let result = init;

  for (const n of nums) {
    result = fn(result, n);
  }

  return result;
};
