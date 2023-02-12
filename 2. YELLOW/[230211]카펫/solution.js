/*
https://school.programmers.co.kr/learn/courses/30/lessons/42842
*/

function solution(brown, yellow) {    
  let b = Math.floor(brown / 4) + 1;
  let a = brown % 4 ? b + 1 : b;
  
  let target = a * b - (brown + yellow);
  
  if (!target) return [a, b];
  
  const getLevel = (target, diff ,count , level) => {
      if (target - diff === 0) return level + 1;
      
      return getLevel(target, diff + count, count + 2, level + 1);
  };
  
  const level = getLevel(target, 1 + a - b, 3 + a - b, 0);
  
  return [a + level, b - level];
}
