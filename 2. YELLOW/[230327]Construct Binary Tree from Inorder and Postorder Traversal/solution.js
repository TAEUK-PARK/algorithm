/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function(inorder, postorder) {
  const length = inorder.length - 1;

  const buildTreeNode = (startI, endI, startP, endP) => {
    if (startP > endP || startI > endI) return null;

    const val = postorder[endP];
    const pivot = inorder.indexOf(val); 
    
    return new TreeNode(
      val,
      buildTreeNode(startI, pivot - 1, startP, startP + (pivot - startI - 1)),
      buildTreeNode(pivot + 1, endI, startP + (pivot - startI), endP - 1)
    );
  };

  return buildTreeNode(0, length, 0, length);
};
