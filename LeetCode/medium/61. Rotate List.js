/*
Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
Example 2:

Input: 0->1->2->NULL, k = 4
Output: 2->0->1->NULL
Explanation:
rotate 1 steps to the right: 2->0->1->NULL
rotate 2 steps to the right: 1->2->0->NULL
rotate 3 steps to the right: 0->1->2->NULL
rotate 4 steps to the right: 2->0->1->NULL

*/


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/*
    get len of list
    
    iter to node (k%n from end)
    append beggining of list to end of this portion
    
*/

var rotateRight = function(head, k) {
  if(!head) return null
  if(!head.next || k === 0) return head
  
  let len = 0
  let curr = head
  while(curr) {
      len++
      curr = curr.next
  }
  
  k = len - k%len
  
  if(k === len) return head

  let prev = null
  curr = head
  while(k!== 0) {
      prev = curr
      curr = curr.next
      k--
  }
  
  prev.next = null
  let newHead = curr
  
  while(curr.next) {
      curr = curr.next
  }
  
  curr.next = head
  
  return newHead
};

let in1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
let out1 = new ListNode(4, new ListNode(5, new ListNode(1, new ListNode(2, new ListNode(3)))))
let in2 = new ListNode(1, new ListNode(2))
let out2 = new ListNode(1, new ListNode(2))

let cases = [
  // {
  //   in: in1, 
  //   in2: 2,
  //   out: out1,
  // },
  {
    in: in2, 
    in2: 2,
    out: out2,
  },
  
];

const tester = require('../tester');
tester.twoInput(cases, rotateRight);

