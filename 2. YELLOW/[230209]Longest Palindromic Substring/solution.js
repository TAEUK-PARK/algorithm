/**
 * 터무니 없는 시간복잡도!!
 *
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const reversedS = s.split("").reverse().join("");
  let i = 0;
  let longestLength = 0;
  let longestP = "";

  while (i !== s.length && longestLength <= s.length - i) {
    for (let j = i + longestLength + 1; j < s.length + 1; j++) {
      const targetS = s.slice(i, j);
      if (reversedS.indexOf(targetS) === s.length - j) {
        longestP = targetS;
        longestLength = targetS.length;
      }
    }
    i += 1;
  }

  return longestP;
};
