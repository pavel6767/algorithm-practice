/*

Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

We repeatedly make duplicate removals on S until we no longer can.

Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.



Example 1:

Input: "abbaca"
Output: "ca"
Explanation:
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".


Note:

1 <= S.length <= 20000
S consists only of English lowercase letters.

*/

/*
  time
    O(n^2)
  space
    O(n)
*/

/**
 * @param {string} S
 * @return {string}
 */

// var removeDuplicates = function (S) {
//   let i = 0;
//   while (i < S.length) {
//     if (S[i] === S[i + 1]) {
//       S = S.slice(0, i) + S.slice(i + 2);
//       i = 0;
//     } else {
//       i++;
//     }
//   }
//   return S;
// };

/*
  t
    O(3n)
  space
    O(3n)
*/

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// var removeDuplicates = function (S) {
//   let head = new ListNode(S[0]);
//   let po = head;
//   for (let i = 1; i < S.length; i++) {
//     po.next = new ListNode(S[i]);
//     po = po.next;
//   }

//   let prev = null;
//   po = head;
//   while (po.next) {
//     if (po.val === po.next.val) {
//       if (!prev) {
//         po = po.next.next;
//         head = po;
//       } else {
//         po = prev;
//         po.next = po.next.next.next;
//         // prev = null;
//       }
//     } else {
//       prev = po;
//       po = po.next;
//     }
//   }

//   po = head;
//   let res = '';
//   while (po) {
//     res += po.val;
//     po = po.next;
//   }
//   return res;
// };

let cases = [
  { in: 'abbaca', out: 'ca' },
  { in: 'azxxzy', out: 'ay' },
];

const tester = require('../tester');
tester.oneInput(cases, removeDuplicates);
