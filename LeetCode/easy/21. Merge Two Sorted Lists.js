/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  let p1 = l1;
  let p2 = l2;

  let l3 = new ListNode(null);
  let p3 = l3;

  while (p1 != null || p2 != null) {
    if (p1 == null) {
      p3.next = p2;
      break;
    }
    if (p2 == null) {
      p3.next = p1;
      break;
    }

    if (p1.val <= p2.val) {
      p3.next = new ListNode(p1.val);
      p1 = p1.next;
    } else {
      p3.next = new ListNode(p2.val);
      p2 = p2.next;
    }
    p3 = p3.next;
  }
  // let po = l3.next;
  // while (po !== null) {
  //   console.log(po.val);
  //   po = po.next;
  // }
  return l3.next;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

console.log(mergeTwoLists(l1, l2));
