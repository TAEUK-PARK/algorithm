/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/course-schedule/
 *
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let numC = numCourses;
  const coursesByRequiredCourses = Array.from({ length: numC }, () => []);

  const checkSelfRef = prerequisites.some((value) => {
    coursesByRequiredCourses[value[0]].push(value[1]);

    return value[0] === value[1];
  });

  if (checkSelfRef) return false;

  const stack = [];

  coursesByRequiredCourses.forEach((value, i) => {
    if (!value.length) {
      stack.push(i);
      numC -= 1;
    }
  });

  while (stack.length) {
    const current = stack.pop();
    coursesByRequiredCourses.forEach((value, index) => {
      value.forEach((v, i, arr) => {
        if (v === current) {
          arr.splice(i, 1);
          if (!arr.length) {
            stack.push(index);
            numC -= 1;
          }
        }
      });
    });
  }

  return numC ? false : true;
};
