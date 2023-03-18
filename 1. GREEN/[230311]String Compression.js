/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/string-compression/
 * 
 * @param {character[]} chars
 * @return {number}
 */
const compress = function(chars) {
  if (chars.length === 1) return 1;

  let currentChar = chars[0];
  let currentCount = 1;
  let addingIndex = 1;
  let index = 1;

  while (index <= chars.length - 1) {
    while (chars[index] === currentChar) {
      currentCount += 1;
      index += 1;
    }
    
    if (currentCount === 1) {
      if (index > chars.length - 1) break;
      currentChar = chars[index];
      chars[addingIndex] = currentChar;
      addingIndex += 1;
      index += 1;
      
      continue;
    }
    
    const count = currentCount.toString();
    
    for (let i = 0; i < count.length; i++) {
      chars[addingIndex] = count[i];
      addingIndex += 1;
    }

    if (index > chars.length - 1) break;

    currentChar = chars[index];
    chars[addingIndex] = currentChar;
    index += 1;
    addingIndex += 1;
    currentCount = 1;
  }

  const compressed = index - addingIndex;
  
  if (compressed) chars.splice(-compressed);

  return chars.length;
};
