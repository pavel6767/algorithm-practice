/*

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
  time
    O(n)
  space
    O(n)
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head == null) return null;
  if (head.next == null) return head;

  let curr = head;
  let next = curr.next;
  let temp;

  curr.next = null;
  while (next != null) {
    temp = next.next;
    next.next = curr;

    curr = next;
    next = temp;
  }

  return curr;
};

let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);
a.next.next.next.next = new ListNode(5);

let aA = new ListNode(5);
aA.next = new ListNode(4);
aA.next.next = new ListNode(3);
aA.next.next.next = new ListNode(2);
aA.next.next.next.next = new ListNode(1);

let cases = [{ in: a, out: aA }];

const tester = require('../tester');
tester.oneInput(cases, reverseList);
