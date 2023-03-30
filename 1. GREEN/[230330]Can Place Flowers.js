/**
 * 난이도: EASY
 * https://leetcode.com/problems/can-place-flowers/
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function (flowerbed, n) {
  let count = 1;

  for (const flower of flowerbed) {
    if (flower) {
      n -= Math.ceil((count - 2) / 2);
      count = 0;
      if (n <= 0) return true;
    } else {
      count += 1;
    }
  }

  return n <= Math.ceil((count - 1) / 2);
};
