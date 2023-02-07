/**
 * 난이도: HARD
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const nums = [...nums1, ...nums2].sort((a, b) => {
      return a - b;
  });
  const length = nums.length;
  
  if (length % 2) {
      const index = (length)/2;
      return nums[Math.floor(index)];
  } else {
      const index = (length)/2;
      return (nums[index] + nums[index - 1])/2;
  }
};
