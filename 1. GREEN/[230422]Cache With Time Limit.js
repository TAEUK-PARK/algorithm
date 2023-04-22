/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/cache-with-time-limit/
 *
 */
const TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const result = this.cache.has(key);

  if (result) {
    const [v, t] = this.cache.get(key);
    clearTimeout(t);
  }

  const timer = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  this.cache.set(key, [value, timer]);

  return result;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  const [v, t] = this.cache.get(key);

  return v;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
