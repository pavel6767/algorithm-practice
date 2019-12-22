/*

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3

*/

/**
 * Definition for singly-linked list.
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head == null) {
    return null;
  }
  let p = head;

  while (p.next != null) {
    if (p.val == p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  // p = head;
  // while (p != null) {
  //   console.log(p);
  //   p = p.next;
  // }
  return head;
};

let a = new ListNode(1);
a.next = new ListNode(1);
a.next.next = new ListNode(2);
a.next.next.next = new ListNode(3);
a.next.next.next.next = new ListNode(3);

// 1 -> 2 -> 3
console.log(deleteDuplicates(a));
