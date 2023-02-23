/**
 * 난이도: EASY
 * https://leetcode.com/problems/longest-common-prefix/
 * 
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";

  strs.sort((a, b) => {
    return a.length - b.length;
  });

  let commonPrefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(commonPrefix) !== 0) {
      commonPrefix = commonPrefix.slice(0, -1);
    }
  }

  return commonPrefix;
};
