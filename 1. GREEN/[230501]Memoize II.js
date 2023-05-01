/**
 * 난이도: HARD
 * https://leetcode.com/problems/memoize-ii/
 *
 * @param {Function} fn
 */
function memoize(fn) {
  const cacheRoot = new Map();

  return function (...args) {
    let currentCacheMap = cacheRoot;
    const length = args.length;

    if (!cacheRoot.has(length)) {
      if (length === 0) {
        const result = fn();
        currentCacheMap.set(length, result);
        return result;
      } else {
        cacheRoot.set(length, new Map());
      }
    }

    if (length === 0) return currentCacheMap.get(length);

    currentCacheMap = currentCacheMap.get(length);

    for (let i = 0; i < length; i++) {
      const arg = args[i];

      if (currentCacheMap.has(arg)) {
        currentCacheMap = currentCacheMap.get(arg);
      } else {
        for (let j = i; j < length - 1; j++) {
          const arg = args[j];
          const nextMap = new Map();
          currentCacheMap.set(arg, nextMap);
          currentCacheMap = nextMap;
        }

        const result = fn(...args);
        currentCacheMap.set(args[length - 1], result);

        return result;
      }
    }

    return currentCacheMap;
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
