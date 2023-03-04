/**
 * 난이도: EASY
 * https://leetcode.com/problems/symmetric-tree/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
  const checkSymmetric = (toTheLeft, toTheRight) => {
    if (!toTheLeft && !toTheRight) return true;
    if (!toTheLeft && toTheRight) return false;
    if (toTheLeft && !toTheRight) return false;
    if (toTheLeft.val !== toTheRight.val) return false;

    return checkSymmetric(toTheLeft.left, toTheRight.right) && checkSymmetric(toTheLeft.right, toTheRight.left);
  };

  return checkSymmetric(root, root);
};
