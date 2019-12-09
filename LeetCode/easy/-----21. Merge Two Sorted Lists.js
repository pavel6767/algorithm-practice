/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  let p1 = l1;
  let p2 = l2;

  // determine first node
  let currentVal = compareValues(p1, p2);

  let res = new ListNode(currentVal.currentVal);
  let resP = res;
  if (currentVal.p1) {
    p1 = p1.next;
  } else {
    p2 = p2.next;
  }

  while (p1 != null || p2 != null) {
    currentVal = compareValues(p1, p2);
    resP.next = new ListNode(currentVal.currentVal);
    if (currentVal.p1) {
      p1 = p1.next;
    } else {
      p2 = p2.next;
    }
    resP = resP.next;
  }

  resP = res;
  while (resP !== null) {
    console.log(resP.val);
    resP = resP.next;
  }
  return res;
};

function compareValues(p1, p2) {
  let obj = {};
  if (p1 != null && p2 != null) {
    if (p1.val <= p2.val) {
      obj.currentVal = p1.val;
      obj.p1 = true;
    } else {
      obj.currentVal = p2.val;
      obj.p1 = false;
    }
  } else if (p1 === null && p2 === null) {
    return null;
  } else if (p1 === null) {
    obj.currentVal = p2.val;
    obj.p1 = false;
  } else if (p2 === null) {
    obj.currentVal = p1.val;
    obj.p1 = true;
  }
  return obj;
}

// let l1 = { val: 1, next: { val: 2, next: { val: 4 } } };
let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
// let l2 = { val: 1, next: { val: 3, next: { val: 4 } } };
let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
// console.log(mergeTwoLists(l1, l2));
console.log(mergeTwoLists({}, {}));
