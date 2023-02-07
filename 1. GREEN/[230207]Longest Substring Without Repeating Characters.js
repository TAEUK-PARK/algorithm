/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let charMap = {};
  let checkPoint = -1;
  let longestResult = 0;

  for (let i = 0; i < s.length; i++) {
    const index = charMap[s[i]] > checkPoint ? charMap[s[i]] : checkPoint;

    if (charMap[s[i]] !== undefined) {
      checkPoint = index;
    }

    charMap[s[i]] = i;
    longestResult = Math.max(longestResult, i - index);
  }

  return longestResult;
};
