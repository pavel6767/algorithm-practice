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
  let res = new ListNode(0);
  let resP = res;

  while (p1 !== null && p2 !== null) {
    if (p1 !== null || p2 !== null) {
      resP.next = new ListNode(0);
    }

    if (p1.val !== null && p2.val !== null) {
      if (p1.val < p2.val) {
        resP.val = p1.val;
        p1 = p1.next;
      } else {
        resP.val = p2.val;
        p2 = p2.next;
      }
    } else if (p1 === null) {
      resP.val = p2.val;
      p2 = p2.next;
    } else if (p2 === null) {
      resP.val = p1.val;
      p1 = p1.next;
    }

    resP = resP.next;
  }

  resP = res;

  while (resP !== null) {
    console.log(resP.val);
    resP = resP.next;
  }
  // return res;
};

// let l1 = { val: 1, next: { val: 2, next: { val: 4 } } };
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
// let l2 = { val: 1, next: { val: 3, next: { val: 4 } } };
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
console.log(mergeTwoLists(l1, l2));
