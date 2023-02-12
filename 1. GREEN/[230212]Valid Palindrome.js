/**
 * 난이도: EASY
 * https://leetcode.com/problems/valid-palindrome/description/
 * 
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const alphabetOnly = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return alphabetOnly === alphabetOnly.split("").reverse().join("");
};
