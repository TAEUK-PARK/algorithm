/**
 * 난이도: EASY
 * https://leetcode.com/problems/roman-to-integer/
 */
class Solution {
  int romanToInt(String s) {
    const romans = [
      ["CM", 900],
      ["CD", 400],
      ["XC", 90],
      ["XL", 40],
      ["IX", 9],
      ["IV", 4],
      ["M", 1000],
      ["D", 500],
      ["C", 100],
      ["L", 50],
      ["X", 10],
      ["V", 5],
      ["I", 1],
    ];

    int result = 0;
    for (List<dynamic> symbol in romans) {
      String roman = symbol[0];
      int value = symbol[1];

      while (s.indexOf(roman) != -1) {
        result += value;
        s = s.replaceFirst(roman, "");
      }
    }

    return result;
  }
}
