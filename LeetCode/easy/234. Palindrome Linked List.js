/*

Given a singly linked list, determine if it is a palindrome.


Example 1:
  Input: 1->2
  Output: false

Example 2:
  Input: 1->2->2->1
  Output: true

Follow up:
Could you do it in O(n) time and O(1) space?

*/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/*
  time
    O(1.5n)
  space
    O(2n)
*/
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// var isPalindrome = function (head) {
//   const arr = [];
//   let po = head;

//   while (po != null) {
//     arr.push(po.val);
//     po = po.next;
//   }

//   for (let i = 0; i < arr.length / 2; i++) {
//     if (arr[i] !== arr[arr.length - i - 1]) {
//       return false;
//     }
//   }

//   return true;
// };

var isPalindrome = function (head) {
  const length = len(head);
  const p = helper(head, length);
  return p.result;
};

function helper(head, len) {
  if (head == null || len <= 0) {
    return { node: head, result: true };
  } else if (len === 1) {
    return { node: head.next, result: true };
  }

  let res = helper(head.next, len - 2);

  if (!res.result || res.node == null) {
    return res;
  }

  res.result = head.val == res.node.val;

  res.node = res.node.next;

  return res;
}

function len(n) {
  let res = 0;
  while (n != null) {
    res++;
    n = n.next;
  }
  return res;
}

let l1 = new ListNode(1);
l1.next = new ListNode(2);

let l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(2);
l2.next.next.next = new ListNode(1);

let cases = [
  { in: l1, out: false },
  { in: l2, out: true },
];

const tester = require('../tester');
tester.twoInput(cases, isPalindrome);
