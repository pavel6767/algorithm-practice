/*

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.



Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.

*/

// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let walk = head;
  let run = head;
  while (run.next != null && run.next.next != null) {
    walk = walk.next;
    run = run.next.next;
  }
  if (run.next != null) {
    walk = walk.next;
  }
  return walk.val;
};

let firstCase = new ListNode(1);
firstCase.next = new ListNode(2);
firstCase.next.next = new ListNode(3);
firstCase.next.next.next = new ListNode(4);
firstCase.next.next.next.next = new ListNode(5);

let secondCase = new ListNode(1);
secondCase.next = new ListNode(2);
secondCase.next.next = new ListNode(3);
secondCase.next.next.next = new ListNode(4);
secondCase.next.next.next.next = new ListNode(5);
secondCase.next.next.next.next.next = new ListNode(6);
let cases = [
  {
    in: firstCase,
    out: firstCase.next.next.val,
  },
  {
    in: secondCase,
    out: secondCase.next.next.next.val,
  },
];
const tester = require('../tester');
tester(cases, middleNode);
