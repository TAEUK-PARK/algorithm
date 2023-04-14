/**
 * 난이도: EASY
 * https://leetcode.com/problems/sleep/
 *
 * @param {number} millis
 */
async function sleep(millis) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
