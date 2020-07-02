/*

Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Example 1:

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL

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
 * @return {ListNode}
 */
/*
    time n
    space n
    map odds
    map evens
    iter to link last of odds to beg of evens
    
    def evenHead (nul)
    while(curr || .next || .next.next)
        evenHead.next = curr.next
        move evenhead forward
        curr.next = evenhead.ext || curr.next.next
        move curr forward
        
    if eHPo.next
    eHPo.next = null
    curr.next = eH.next
    
    return head
    
1->2->3->4->5->6->NULL

curr 3->4
eHPo 2->4->5
curr 3->5

curr 5->6
eHPo 4->6
curr null



1->2->3->4->5->6->NULL
curr 1->2

ehpo null->2
ehpo 2->3
curr 1->3
curr 3->4

ehpo 2->4
ehpo 4->5
curr 3->5
curr 5->6

head 1-3-5-6
eH n-2-4-5-6

head 1-3-5-6
eH n-2-4-6


if curr has a next
  point ehpo.next = curr.next
*/  
var oddEvenList = function(head) {
  if(!head) return null
  let eH = new ListNode(null)
  let curr = head
  let eHPo = eH
  while(curr.next && curr.next.next) {
      eHPo.next = curr.next
      eHPo = eHPo.next
      curr.next = eHPo.next
      curr = curr.next
  }
  eHPo.next = null
  if(curr.next)  {
    eHPo.next = curr.next
  }
  curr.next = eH.next
  return head
};

let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = new ListNode(4);
a.next.next.next.next = new ListNode(5);

let aA = new ListNode(1);
aA.next = new ListNode(3);
aA.next.next = new ListNode(5);
aA.next.next.next = new ListNode(2);
aA.next.next.next.next = new ListNode(4);

let b = new ListNode(1);
b.next = new ListNode(2);
b.next.next = new ListNode(3);
b.next.next.next = new ListNode(4);
b.next.next.next.next = new ListNode(5);
b.next.next.next.next.next = new ListNode(6);

let bB = new ListNode(1);
bB.next = new ListNode(3);
bB.next.next = new ListNode(5);
bB.next.next.next = new ListNode(2);
bB.next.next.next.next = new ListNode(4);
bB.next.next.next.next.next = new ListNode(6);


let cases = [
  { in: a, out: aA },
  { in: b, out: bB },
  { in: null, out: null },
];

const tester = require('../tester');
tester.oneInput(cases, oddEvenList);
