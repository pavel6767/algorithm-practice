/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, carry = 0) {
  if (l1 === null && l2 === null && carry === 0) {
    return null;
  }

  if (l1 !== null) {
    carry += l1.val;
  }
  if (l2 !== null) {
    carry += l2.val;
  }

  let result = new ListNode(carry % 10);
  result.next = addTwoNumbers(
    l1 !== null ? l1.next : null,
    l2 !== null ? l2.next : null,
    carry > 9 ? 1 : 0,
  );
  return result;
};

let l1 = new ListNode(5);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

let p = addTwoNumbers(l1, l2);
while (p !== null) {
  console.log(p);
  p = p.next;
}
