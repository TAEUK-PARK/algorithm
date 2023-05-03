/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/convert-object-to-json-string/
 *
 * @param {any} object
 * @return {string}
 */
const jsonStringify = function (object) {
  if (Array.isArray(object)) {
    let string = "[";

    for (const value of object) {
      string = string + jsonStringify(value) + ",";
    }

    return string.length !== 1 ? string.slice(0, -1) + "]" : "[]";
  }

  if (typeof object === "object") {
    if (object === null) return "null";

    let string = "{";

    for (const key of Object.keys(object)) {
      string = string + stringify(key) + ":" + jsonStringify(object[key]) + ",";
    }

    return string.length !== 1 ? string.slice(0, -1) + "}" : "{}";
  }

  return stringify(object);
};

function stringify(object) {
  if (typeof object === "string") return `"${object}"`;

  return String(object);
}
