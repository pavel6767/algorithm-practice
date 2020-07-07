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
// var addTwoNumbers = function(l1, l2, carry = 0) {
//   if (l1 === null && l2 === null && carry === 0) {
//     return null;
//   }

//   if (l1 !== null) {
//     carry += l1.val;
//   }
//   if (l2 !== null) {
//     carry += l2.val;
//   }

//   let result = new ListNode(carry % 10);
//   result.next = addTwoNumbers(
//     l1 !== null ? l1.next : null,
//     l2 !== null ? l2.next : null,
//     carry > 9 ? 1 : 0,
//   );
//   return result;
// };

/*
  Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
  Output: 7 -> 0 -> 8

  iter both lists
    add both numbers
    determine if sum exceeds 9
      carry over 1
      curr %10
    move to next

  edge
    lists not same length
      modify iter condition
    null list
*/
// function addTwoNumbers(l1, l2) {
//   if (!l1) return l2;

//   let carry = false;
//   let p1 = l1,
//     p2 = l2;

//   while (p1 && p2) {
//     p1.val += p2.val;
//     if (carry) p1.val++;
//     if (p1.val > 9) {
//       carry = true;
//       p1.val = p1.val % 10;
//     } else {
//       carry = false;
//     }
//     p1 = p1.next;
//     p2 = p2.next;
//   }

//   if (p2) {
//     p1.next = p2;
//   }

//   return l1;
// }

var addTwoNumbers = function(l1, l2, carry = false) {
  if(!l1 && !l2) return carry ? new ListNode(1) : null
  if(!carry) {
    if(!l1) return l2
    if(!l2) return l1
  }

  let currNode = l1? l1:l2
  currNode.val = (l1? l1.val:0) + (l2?l2.val:0) + (carry?1:0)
  
  if(currNode.val>9) {
      currNode.val %=10
  } else {
      carry = false
  }
  
  currNode.next = addTwoNumbers(l1?l1.next:null, l2?l2.next:null, carry)
  
  return currNode
}

module.exports = addTwoNumbers;
