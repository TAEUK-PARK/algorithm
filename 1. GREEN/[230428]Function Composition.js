/**
 * 난이도: EASY
 * https://leetcode.com/problems/function-composition/
 *
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
  return function (x) {
    let result = x;

    for (let i = functions.length - 1; i >= 0; i -= 1) {
      result = functions[i](result);
    }

    return result;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
