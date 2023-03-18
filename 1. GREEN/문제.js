/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
const 쏘카코테펑션1번 = function (numbers, k) {
  // [20, 30, 10, 50, 60], 20

  const copyAndSort = numbers.slice().sort((a, b) => a - b);
  for (let i = 0; i < copyAndSort.length - 1; i++) {
    if (copyAndSort[i + 1] - copyAndSort[i] > k) return -1;
  }
};

console.log(쏘카코테펑션1번([0, 10, 30, 55, 60, 70], 20));

function createDistance(num, index) {
  return {
    num,
    index,
    get value() {
      return Math.min(
        numsMap.has(num) ? numsMap.get(num) : Infinity,
        distanceData[this.index - 1]?.value !== undefined
          ? distanceData[this.index - 1].value
          : Infinity,
        distanceData[this.index + 1]?.value
      );
    },
  };
}

const d = new Distance();

console.log(d.value);
