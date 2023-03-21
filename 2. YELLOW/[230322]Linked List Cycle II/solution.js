/**
 * 난이도: MEDIUM
 * https://leetcode.com/problems/linked-list-cycle-ii/
 *
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
  if (head === null) return null;

  let pointer1 = head;
  let pointer2 = head;

  while (pointer2.next !== null && pointer2.next.next !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;

    if (pointer1 === pointer2) {
      let connectedNode = head;

      while (connectedNode !== pointer1) {
        pointer1 = pointer1.next;
        connectedNode = connectedNode.next;
      }

      return connectedNode;
    }
  }

  return null;
};
