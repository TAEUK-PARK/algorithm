/**
 * 난이도: EASY
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  // Array.prototype.indexOf() 사용 시 구현 되는 함수지만 직접 구현
  if (haystack.length < needle.length) return -1;
  if (haystack === needle) return 0;

  const nLength = needle.length;

  for (let i = 0; i < haystack.length - nLength + 1; i++) {
    let checkOccurrence = 0;
    for (let j = i; j < i + nLength; j++) {
      if (haystack[j] !== needle[j - i]) {
        break;
      } else {
        checkOccurrence += 1;
      }
    }

    if (checkOccurrence === nLength) return i;
  }

  return -1;
};
