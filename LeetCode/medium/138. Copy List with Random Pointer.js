/*

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.


Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:



Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
Example 4:

Input: head = []
Output: []
Explanation: Given linked list is empty (null pointer), so return null.


Constraints:

-10000 <= Node.val <= 10000
Node.random is null or pointing to a node in the linked list.
Number of Nodes will not exceed 1000.

*/

// Definition for singly-linked list.
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/*
  time
    O(2n -> n)
  space
    O(2n -> n)
*/
/*
  copy list itself
  randomList={val:point}
  iterate list
    save random point to randomList
    make a new node assign proper val, next
    by keeping prev record

  iteration to assign random pointer // n**2
    iterate till find node to point random
    i.e. 1st node, random is 5th node
      itereate till get 5th node

*/
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const map = new Map();
  let po = head;
  let newHead = new Node(null, null, null);
  let prev = newHead;

  while (po) {
    let newNode = new Node(po.val, null, null);
    prev.next = newNode;
    prev = newNode;
    map.set(po, newNode);
    po = po.next;
  }

  po = head;
  while (po) {
    let curr = map.get(po);
    let random = map.get(po.random);
    curr.random = random;
    po = po.next;
  }

  return newHead.next;
};

/* modifies in place time O(2n) space O(2n) */
// var copyRandomList = function (head) {
//   if (head == null) return null;

//   let po = head;
//   while (po) {
//     let clone = new Node(po.val, po.next, null);
//     po.next = clone;
//     po = clone.next;
//   }

//   let newHead = new Node(null, null, null);
//   let prev = newHead;
//   po = head;
//   while (po && po.next) {
//     po.next.random = po.random != null ? po.random.next : null;
//     prev.next = po.next;
//     prev = prev.next;
//     po = po.next.next;
//   }
// };
// [[7,null],[13,0],[11,4],[10,2],[1,0]]
const a0 = new Node(7, null, null);
const a1 = new Node(13, null, a0);
const a2 = new Node(11, null, null);
const a3 = new Node(10, null, a2);
const a4 = new Node(1, null, a0);
a0.next = a1;
a1.next = a2;
a2.next = a3;
a3.next = a4;
a2.random = a4;

// [[3,null],[3,0],[3,null]]
const b0 = new Node(3, null, null);
const b1 = new Node(3, null, b0);
const b2 = new Node(3, null, null);
b0.next = b1;
b1.next = b2;
let cases = [{ in: a0, out: a0 }];

const tester = require('../tester');
tester.oneInput(cases, copyRandomList);
