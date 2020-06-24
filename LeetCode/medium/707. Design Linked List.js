/*

Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list. A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement these functions in your linked list class:

get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
addAtTail(val) : Append a node of value val to the last element of the linked list.
addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.
 

Example:

Input: 
["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
[[],[1],[3],[1,2],[1],[1],[1]]
Output:  
[null,null,null,null,2,null,3]

Explanation:
MyLinkedList linkedList = new MyLinkedList(); // Initialize empty LinkedList
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
linkedList.get(1);            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
linkedList.get(1);            // returns 3

*/

/**
 * Initialize your data structure here.
 */

/*
[]
    getindx n
    addtail 1
    addhead n
    addindx n
    delindx n

dbl ll 
- node construct
- map(inx: node)
    getindx n 
    addtail 1
    addhead 1
    addindx n 
    delindx n
    
[0,1,2,3] 2
(1).next = newNode
newNode.next = (2)


    
*/

function Node(val, next =null, prev = null) {
  this.val = val
  this.next = next
  this.prev = prev
}

var MyLinkedList = function() {
  this.tail = new Node(null)
  this.head = new Node(null, this.tail, null)
  this.tail.prev = this.head
  this.length = 0
};

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  console.log(`\nget ${index}`) 
  if(index > this.length-1) return -1
  
  let curr = 0
  let po = this.head.next
  while(curr<index) {
      po = po.next
      curr++
  }

  return po.val
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  let {head} = this
  const next = head.next

  const newNode = new Node(val)
  newNode.prev = head
  newNode.next = next
  
  head.next = newNode
  next.prev = newNode

  this.length++
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  let {tail} = this
  const prev = tail.prev

  const newNode = new Node(val)
  newNode.next = tail
  newNode.prev = tail.prev
  
  tail.prev = newNode
  prev.next = newNode
  
  this.length++
};

/**
* Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index> this.length) return
  
  let curr = 0
  let po = this.head.next
  
  while(curr<index) {
      curr++
      po = po.next
  }
  
  const n = new Node(val)
  n.next = po
  n.prev = po.prev
  
  po.prev = n
  n.prev.next = n

  this.length++
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index> this.length-1) return
  
  let curr = 0
  let po = this.head.next
  
  while(curr<index) {
      curr++
      po = po.next
  }
  
  const next = po.next
  const prev = po.prev
  
  prev.next = next
  next.prev = prev
  
  po.next = null
  po.prev = null
  
  this.length--
};

var linkedList = new MyLinkedList(); // Initialize empty LinkedList
linkedList.addAtHead(7);
linkedList.addAtHead(2);
linkedList.addAtHead(1);
linkedList.addAtIndex(3,0);
linkedList.deleteAtIndex(2);
linkedList.addAtHead(6);
linkedList.addAtTail(4);
console.log(linkedList.get(4)); // returns 4
linkedList.addAtHead(4);
linkedList.addAtIndex(5,0);
linkedList.addAtHead(6);