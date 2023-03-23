/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
  const values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  const setTreeNode = (left, right) => {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    return new TreeNode(
      values[mid],
      setTreeNode(left, mid - 1),
      setTreeNode(mid + 1, right)
    );
  };

  return setTreeNode(0, values.length - 1);
};
