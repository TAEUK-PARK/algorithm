/**
 * 난이도: HARD
 * https://leetcode.com/problems/jump-game-iv/description/
 *
 * @param {number[]} arr
 * @return {number}
 */
const minJumps = function (arr) {
  const indexMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (indexMap.has(arr[i])) {
      const indexMapArr = indexMap.get(arr[i]);
      indexMapArr.push(i);
    } else {
      indexMap.set(arr[i], [i]);
    }
  }

  let queue = [0];
  let count = 0;
  const last = arr.length - 1;

  while (true) {
    const nextQueue = [];

    for (const q of queue) {
      if (q === last) return count;
      const value = arr[q];
      arr[q] = null;

      if (arr[q + 1] !== null) {
        nextQueue.push(q + 1);
      }

      if (arr[q - 1] !== null && q - 1 >= 0) {
        nextQueue.push(q - 1);
      }

      if (indexMap.has(value)) {
        indexMap.get(value).forEach((i) => {
          nextQueue.push(i);
        });
        indexMap.delete(value);
      }
    }

    count += 1;
    queue = nextQueue;
  }
};
