/**
 * 난이도: EASY
 * https://leetcode.com/problems/invert-binary-tree/
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const getInvertTree = (node) => {
    if (!node) return;

    [node.left, node.right] = [node.right, node.left];

    getInvertTree(node.left);
    getInvertTree(node.right);
  }

  getInvertTree(root);

  return root;
};
