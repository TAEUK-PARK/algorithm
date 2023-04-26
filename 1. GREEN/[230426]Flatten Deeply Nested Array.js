/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/flatten-deeply-nested-array/
 *
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
const flat = function (arr, n) {
  if (n === 0) return arr;

  for (let i = 0; i < arr.length; i++) {
    const e = flat(arr[i], n - 1);

    if (Array.isArray(e)) {
      arr.splice(i, 1, ...e);
      i += e.length - 1;
    }
  }

  return arr;
};
