/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/koko-eating-bananas/
 *
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.pow(10, 9);

  while (left < right) {
    let k = Math.floor((left + right) / 2);
    let currentH = 0;

    for (let i = 0; i < piles.length; i++) {
      currentH += Math.ceil(piles[i] / k);

      if (currentH > h) break;
    }

    if (currentH > h) {
      left = k + 1;
    } else {
      right = k;
    }
  }

  return left;
};
