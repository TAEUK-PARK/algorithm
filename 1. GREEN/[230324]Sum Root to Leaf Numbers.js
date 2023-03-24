/**
 * 난이도:MEDIUM
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
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
 * @return {number}
 */
const sumNumbers = function (root) {
  const getSumOfRepNum = (node, v = 0) => {
    if (!node) return 0;
    const value = node.val + v * 10;
    if (!node.left && !node.right) return value;
    return getSumOfRepNum(node.left, value) + getSumOfRepNum(node.right, value);
  };

  return getSumOfRepNum(root);
};
