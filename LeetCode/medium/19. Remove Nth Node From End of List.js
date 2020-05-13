/*

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?

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
    O(1)
*/

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  if (head.next === null) return null;

  let p = head;
  let depth = 1;

  while (p.next != null) {
    p = p.next;
    depth++;
  }

  if (n === depth) {
    head = head.next;
  } else {
    p = head;
    for (let i = 1; i < depth - n; i++) {
      p = p.next;
    }

    if (p.next.next != null) {
      p.next.val = p.next.next.val;
      p.next.next = p.next.next.next;
    } else {
      p.next = null;
    }
  }

  return head;
};

let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);
a.next.next.next.next = new ListNode(5);

let aA = new ListNode(1);
aA.next = new ListNode(2);
aA.next.next = new ListNode(3);
aA.next.next.next = new ListNode(5);

let b = new ListNode(1);
b.next = new ListNode(2);
let bB = new ListNode(1);
let bC = new ListNode(2);

let cases = [
  { in: a, in2: 2, out: aA },
  // { in: b, in2: 1, out: bB },
  { in: b, in2: 2, out: bC },
];

const tester = require('../tester');
tester.twoInput(cases, removeNthFromEnd);
