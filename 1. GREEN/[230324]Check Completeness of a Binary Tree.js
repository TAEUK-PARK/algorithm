/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/check-completeness-of-a-binary-tree/
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
const isCompleteTree = function (root) {
  const check = (nodes, checker = true) => {
    const nextNodes = [];

    for (const node of nodes) {
      const left = node.left;
      const right = node.right;

      if (!checker) {
        if (left || right) return false;
      }

      if (left && right) {
        nextNodes.push(left, right);
        continue;
      }

      if (!left && right) {
        return false;
      }

      if (left && !right) {
        nextNodes.push(left);
      }

      checker = false;
    }

    if (!nextNodes.length) return true;
    return check(nextNodes, checker);
  };

  return check([root]);
};
