/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/debounce/
 *
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
const debounce = function (fn, t) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);

    const newTimer = setTimeout(() => {
      fn(...args);
    }, t);

    timer = newTimer;
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
