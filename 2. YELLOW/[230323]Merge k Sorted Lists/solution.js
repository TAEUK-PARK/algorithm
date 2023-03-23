/**
 * 난이도: HARD
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  if (!lists.length) return null;

  const conquer = (list1, list2) => {
    if (!list1) return list2;
    if (!list2) return list1;

    const head = list1.val > list2.val ? list2 : list1;

    while (list1 && list2) {
      if (list1.val > list2.val) {
        while (list1.val > list2.next?.val) {
          list2 = list2.next;
        }
        const next2 = list2.next;
        list2.next = list1;
        list2 = next2;
      } else {
        while (list1.next?.val <= list2.val) {
          list1 = list1.next;
        }
        const next1 = list1.next;
        list1.next = list2;
        list1 = next1;
      }
    }

    return head;
  };
  const divide = (left, right) => {
    if (left === right) return lists[left];

    const mid = Math.floor((left + right) / 2);
    return conquer(divide(left, mid), divide(mid + 1, right));
  };

  return divide(0, lists.length - 1);
};
