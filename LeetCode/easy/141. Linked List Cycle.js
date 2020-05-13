/*

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:

  Input: head = [3,2,0,-4], pos = 1
  Output: true
  Explanation: There is a cycle in the linked list, where tail connects to the second node.


Example 2:

  Input: head = [1,2], pos = 0
  Output: true
  Explanation: There is a cycle in the linked list, where tail connects to the first node.


Example 3:

  Input: head = [1], pos = -1
  Output: false
  Explanation: There is no cycle in the linked list.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head == null) return false;
  if (head.next == null) return false;

  let run = head;
  let walk = head;

  while (run != null && run.next != null) {
    run = run.next.next;
    walk = walk.next;

    if (run == walk) {
      break;
    }
  }

  return run == walk;
};

let a = new ListNode(3);
a.next = new ListNode(2);
a.next.next = new ListNode(0);
a.next.next.next = new ListNode(-4);
a.next.next.next.next = a.next;

let aA = new ListNode(1);
aA.next = new ListNode(2);

let aB = new ListNode(1);
aB.next = new ListNode(2);
aB.next.next = aB;

let cases = [
  // { in: a, out: true },
  { in: aA, out: false },
  // { in: aB, out: true },
];

const tester = require('../tester');
tester.oneInput(cases, hasCycle);
