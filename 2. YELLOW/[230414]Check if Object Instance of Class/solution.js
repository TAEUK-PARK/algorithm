/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/check-if-object-instance-of-class/description/
 *
 * @param {Object} object
 * @param {Function} classFunction
 * @return {boolean}
 */
const checkIfInstanceOf = function (obj, classFunction) {
  try {
    return (
      obj instanceof classFunction ||
      obj.constructor === classFunction ||
      classFunction === Object
    );
  } catch (err) {
    return false;
  }
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
