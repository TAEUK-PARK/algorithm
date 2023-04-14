/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = function (n) {
  let counter = n;
  return function () {
    const result = counter;
    counter += 1;
    return result;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
