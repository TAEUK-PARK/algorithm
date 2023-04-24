/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/memoize/
 *
 * @param {Function} fn
 */
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const argsString = args.toString();
    if (cache.has(argsString)) return cache.get(argsString);

    const result = fn(...args);
    cache.set(argsString, result);

    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
