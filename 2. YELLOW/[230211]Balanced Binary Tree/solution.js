/**
 * 난이도: EASY
 * https://leetcode.com/problems/balanced-binary-tree/
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
var isBalanced = function(root) {
  if (!root) return true;

  const getDepthDFS = (node, depth) => {
    if (!node) return depth;
    return Math.max(getDepthDFS(node.left, depth + 1), getDepthDFS(node.right, depth + 1));
  };

  if (Math.abs(getDepthDFS(root.left, 0) - getDepthDFS(root.right, 0)) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right);
};
