/*
This problem was asked by Google.

Given the head of a singly linked list, reverse it in-place.
*/

function Node(val) {
  this.val = val;
  this.next = null;
}

function reverseList(n) {
  let current = n;
  let prev = null;
  let temp = null;

  while (current !== null) {
    temp = current.next;

    current.next = prev;
    prev = current;

    current = temp;
  }
  return prev;
}

let n = new Node(1);
n.next = new Node(2);
n.next.next = new Node(3);
n.next.next.next = new Node(4);

console.log(reverseList(n));
