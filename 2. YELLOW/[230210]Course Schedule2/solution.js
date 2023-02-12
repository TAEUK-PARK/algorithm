/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/course-schedule-ii/
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  if (!numCourses) return [];

  const inward = new Array(numCourses).fill(0);
  const outward = new Map();
  prerequisites.forEach((value) => {
    inward[value[0]] += 1;

    if (outward.has(value[1])) {
      outward.get(value[1]).push(value[0]);
    } else {
      outward.set(value[1], [value[0]]);
    }
  });

  const resultSet = [];
  const stack = [];

  for (let i = 0; i < numCourses; i++) {
    if (inward[i] === 0) {
      stack.push(i);
      resultSet.push(i);
    }
  }

  while (stack.length) {
    outward.get(stack.pop())?.forEach((value) => {
      inward[value] -= 1;
      if (!inward[value]) {
        stack.push(value);
        resultSet.push(value);
      }
    });
  }

  return resultSet.length === numCourses ? resultSet : [];
};
