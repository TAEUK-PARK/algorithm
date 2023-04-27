/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/json-deep-equal/
 *
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
const areDeeplyEqual = function (o1, o2) {
  if (typeof o1 !== "object" || typeof o2 !== "object") return o1 === o2;

  const isArray1 = Array.isArray(o1);
  const isArray2 = Array.isArray(o2);

  if ((isArray1 && isArray2) || (!isArray1 && !isArray2)) {
    const map = new Map();

    for (const key in o1) {
      map.set(key, o1[key]);
    }

    for (const key in o2) {
      if (!map.has(key)) return false;

      const base = map.get(key);
      const target = o2[key];

      if (!areDeeplyEqual(base, target)) return false;
    }

    return true;
  } else if (isArray1 || isArray2) {
    return false;
  }
};
