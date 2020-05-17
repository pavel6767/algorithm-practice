/*

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
7243 + 564 = 7807

get to end of each list
  add correspoding numbers
  determine if to carry
  move a level up

traverse to end
  read value
  bring a value back to a prev level

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*

  stack1
  stack2

  while both stacks are not empty
    keep adding and popping

  make a check to add leftover

 */

// time O(2n+m --> n)
// space O(2n+2m --> n+m)
var addTwoNumbers = function (l1, l2) {
  let stack1 = [],
    stack2 = [];
  let p1 = l1,
    p2 = l2;

  while (p1) {
    stack1.push(p1.val);
    p1 = p1.next;
  }

  while (p2) {
    stack2.push(p2.val);
    p2 = p2.next;
  }

  let carry = false;
  let last = null;

  while (stack1.length > 0 && stack2.length > 0) {
    let curr = new ListNode(stack1.pop() + stack2.pop(), last);

    if (carry) curr.val++;
    if (curr.val > 9) {
      carry = true;
      curr.val %= 10;
    } else {
      carry = false;
    }
    last = curr;
  }

  let stack = [];
  if (stack1.length > 0) {
    stack = stack1;
  }

  if (stack2.length > 0) {
    stack = stack2;
  }

  while (stack.length > 0) {
    let p = new ListNode(stack.pop(), last);
    if (carry) p.val++;
    if (p.val > 9) {
      carry = true;
      p.val %= 10;
    } else {
      carry = false;
    }
    last = p;
  }

  let p = last;
  if (carry) {
    p = new ListNode(1, last);
  }
  return p;
};

let a = new ListNode(7);
a.next = new ListNode(2);
a.next.next = new ListNode(4);
a.next.next.next = new ListNode(3);

let b = new ListNode(5);
b.next = new ListNode(6);
b.next.next = new ListNode(4);

let cases = [{ in: a, in2: b, out: 7807 }];

const tester = require('../tester');
tester.twoInput(cases, addTwoNumbers);
