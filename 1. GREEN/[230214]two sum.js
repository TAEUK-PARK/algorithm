/**
 * 난이도: EASY
 * https://leetcode.com/problems/two-sum/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();
  const result = [];

  nums.some((value, index) => {
    const targetValue = target - value;
    if (map.has(targetValue)) {
      result.push(map.get(targetValue));
      result.push(index);
      return true;
    }
    map.set(value, index);
  });

  return result;
};
