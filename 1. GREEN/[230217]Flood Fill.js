/**
 * 난이도: EASY
 * https://leetcode.com/problems/flood-fill/
 * 
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const next = (image, sr, sc, color, target) => {
  image[sr][sc] = color;

  if (image[sr + 1]?.[sc] === target) next(image, sr + 1, sc, color, target);
  if (image[sr - 1]?.[sc] === target) next(image, sr - 1, sc, color, target);
  if (image[sr]?.[sc + 1] === target) next(image, sr, sc + 1, color, target);
  if (image[sr]?.[sc - 1] === target) next(image, sr, sc - 1, color, target);
};

const floodFill = function(image, sr, sc, color) {
  const target = image[sr][sc];

  if (color === target) return image;

  next(image, sr, sc, color, target);

  return image;
};
