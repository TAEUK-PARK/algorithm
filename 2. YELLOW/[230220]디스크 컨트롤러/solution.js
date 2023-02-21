/*
https://school.programmers.co.kr/learn/courses/30/lessons/42627#
*/

function solution(jobs) {
  jobs.sort((a, b) => {
    return a[0] - b[0];
  });

  let eTime = 0;
  let result = 0;

  const list = [];

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i][0] > eTime) {
      list.sort((a, b) => {
        return b - a;
      });

      while (jobs[i][0] > eTime) {
        if (!list.length) {
          eTime = jobs[i][0];
        } else {
          const pTime = list.pop();
          eTime += pTime;
          result += eTime;
        }
      }

      list.push(jobs[i][1]);
      result -= jobs[i][0];
    } else {
      list.push(jobs[i][1]);
      result -= jobs[i][0];
    }
  }

  list.sort((a, b) => b - a);
  while (list.length) {
    const pTime = list.pop();
    eTime += pTime;
    result += eTime;
  }

  return Math.floor(result / jobs.length);
}
