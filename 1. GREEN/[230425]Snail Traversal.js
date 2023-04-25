/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/snail-traversal/
 *
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];

  const snailArray = new Array(rowsCount);

  for (let i = 0; i < rowsCount; i++) {
    snailArray[i] = [];
  }

  let order = false;

  for (let i = 0; i < this.length; i++) {
    const r = i % rowsCount;

    if (r === 0) order = !order;

    if (order) {
      snailArray[r].push(this[i]);
    }

    if (!order) {
      snailArray[rowsCount - 1 - r].push(this[i]);
    }
  }

  return snailArray;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
