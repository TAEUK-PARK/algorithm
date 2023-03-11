/**
 * bubble, insertion, selection, shell, merge sort를 구현
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  const swap = (array, a, b) => {
    [array[a], array[b]] = [array[b], array[a]];
  };
  // bubble sort
  // let count = nums.length - 1;
  // let changed = false;

  // while (true) {
  //   for (let i = 0; i < count; i ++) {
  //     if (nums[i + 1] < nums[i]) {
  //       swap(nums, i, i + 1);
  //       changed = true;
  //     }
  //   }

  //   if (!changed) return nums;
  //   if (count <= 1) return nums;
  //   count -= 1;
  //   changed = false;
  // }

  // insertion sort
  // for (let i = 1; i < nums.length; i++) {
  //   for (let j = i; j > 0; j--) {
  //     if (nums[j] < nums[j - 1]) {
  //       swap(nums, j, j - 1);
  //     } else {
  //       continue;
  //     }
  //   }
  // }

  // return nums;

  // selection sort
  // let startIndex = 0;

  // while (startIndex <= nums.length - 2) {
  //   let min = Infinity;
  //   let minIndex;

  //   for (let i = startIndex; i < nums.length; i++) {
  //     const value = nums[i];
  //     if (value < min) {
  //       min = value;
  //       minIndex = i;
  //     }
  //   }

  //   swap(nums, startIndex, minIndex);
  //   startIndex += 1;
  // }

  // return nums;

  // shell sort
  // let k = Math.floor(nums.length / 2);

  // while (true) {
  //   for (let i = 0; i < k; i++) {
  //     for (let j = i + k; j < nums.length; j += k) {
  //       for (let n = j; n > 0; n -= k) {
  //         if (nums[n] < nums[n - k]) {
  //           swap(nums, n, n - k);
  //         } else {
  //           continue;
  //         }
  //       }
  //     }
  //   }
  //   const nextK = Math.floor(k / 2);

  //   if (k === 1) return nums;

  //   if (nextK % 2 === 0) {
  //     k = nextK + 1;
  //   } else {
  //     k = nextK;
  //   }
  // }

  // merge sort
  // if (nums.length === 1) return nums;

  // const mid = Math.floor(nums.length / 2);
  // const left = sortArray(nums.slice(0, mid));
  // const right = sortArray(nums.slice(mid));

  // const mergedArray = [];
  // let leftIndex = 0;
  // let rightIndex = 0;

  // while (mergedArray.length !== left.length + right.length) {
  //   if (leftIndex > left.length - 1) {
  //     mergedArray.push(right[rightIndex]);
  //     rightIndex += 1;
  //     continue;
  //   }

  //   if (rightIndex > right.length - 1) {
  //     mergedArray.push(left[leftIndex]);
  //     leftIndex += 1;
  //     continue;
  //   }

  //   if (left[leftIndex] > right[rightIndex]) {
  //     mergedArray.push(right[rightIndex]);
  //     rightIndex += 1;
  //   } else {
  //     mergedArray.push(left[leftIndex]);
  //     leftIndex += 1;
  //   }
  // }

  // return mergedArray;
};
