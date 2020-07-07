/*

You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

Example 1:
  Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
  Output: [1,2,3,7,8,11,12,9,10,4,5,6]
  Explanation:
    The multilevel linked list in the input is as follows:

After flattening the multilevel linked list it becomes:


Example 2:
  Input: head = [1,2,null,3]
  Output: [1,3,2]
  Explanation:

  The input multilevel linked list is as follows:

    1---2---NULL
    |
    3---NULL

Example 3:
  Input: head = []
  Output: []


How multilevel linked list is represented in test case:

We use the multilevel linked list from Example 1 above:

 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL
The serialization of each level is as follows:

[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]
To serialize all levels together we will add nulls in each level to signify no node connects to the upper node of the previous level. The serialization becomes:

[1,2,3,4,5,6,null]
[null,null,7,8,9,10,null]
[null,11,12,null]
Merging the serialization of each level and removing trailing nulls we obtain:

[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]


Constraints:

Number of Nodes will not exceed 1000.
1 <= Node.val <= 10^5

*/

// Definition for a Node.
function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

/**
 * @param {Node} head
 * @return {Node}
 */

/*
  iterate list
    if node has child
      point to child
    if node has next
      point to next
  return head

// 1---2---3---4---5---6--NULL
//          |
//          7---8   9---10--NULL
//              |   |
//              11--12
*/
/*
  time
    O(2n)
  space
    O(2n)
*/
// var flatten = function (head) {
//   if (head == null) return null;

//   let po = head;
//   while (po) {
//     if (po.child) {
//       let temp = po.next;
//       let child = flatten(po.child);

//       po.next = child;
//       child.prev = po;
//       po.child = null;

//       let po2 = child;
//       while (po2.next) {
//         po2 = po2.next;
//       }
//       po2.next = temp;
//       if (temp) temp.prev = po2;
//       po = po2;
//     }
//     po = po.next;
//   }
//   return head;
// };

/*
  stack
    merge first children
      push .next
      push .child
*/
/*
    trav list (node)
        if node has child
            make child the next of node and
            last tail child prev of original next
            childN = recur(node.child)
            childN.prev = node
            stack.push(node.next)
            node = node.next
    
    stack [head]
    res = (null)
    prev = res
    curr = null
    while(curr || stack.len>0) {
        if(!curr) curr = stack.pop()
        if(curr has child)
            stack.push(curr.next)
            child.prev = curr
            curr.next = child
        prev = curr
        curr = curr.next
    }
    return res.next   
*/
/*
t O(n)
s O(n)
*/
var flatten = function(head) {
  if(!head) return null
  
  const stack = []
  let prev = null,
      curr = head;
  while(curr || stack.length >0) {
      if(!curr) {
          curr = stack.pop()
          prev.next = curr
          curr.prev = prev
      }
      if(curr.child) {
          if(curr.next) stack.push(curr.next)
          curr.child.prev = curr
          curr.next = curr.child
          curr.child = null
      }
      
      prev = curr
      curr = curr.next
  }
  return head
};

// val, prev next child
const a1 = new Node(1, null, null, null);
const a2 = new Node(2, a1, null, null);
const a3 = new Node(3, a2, null, null);
const a4 = new Node(4, a3, null, null);
const a5 = new Node(5, a4, null, null);
const a6 = new Node(6, a5, null, null);
const a7 = new Node(7, null, null, null);
const a8 = new Node(8, a7, null, null);
const a9 = new Node(9, a8, null, null);
const a10 = new Node(10, a9, null, null);
const a11 = new Node(11, null, null, null);
const a12 = new Node(12, a11, null, null);
a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;
a7.next = a8;
a8.next = a9;
a9.next = a10;
a11.next = a12;
a3.child = a7;
a8.child = a11;

const b1 = new Node(1, null, null, null);
const b2 = new Node(2, b1, null, null);
const b3 = new Node(3, b2, null, null);
const b7 = new Node(7, b3, null, null);
const b8 = new Node(8, b7, null, null);
const b11 = new Node(11, b8, null, null);
const b12 = new Node(12, b11, null, null);
const b9 = new Node(9, b12, null, null);
const b10 = new Node(10, b9, null, null);
const b4 = new Node(4, b10, null, null);
const b5 = new Node(5, b4, null, null);
const b6 = new Node(6, b5, null, null);
b1.next = b2;
b2.next = b3;
b3.next = b7;
b7.next = b8;
b8.next = b11;
b11.next = b12;
b12.next = b9;
b9.next = b10;
b10.next = b4;
b4.next = b5;
b5.next = b6;

const c1 = new Node(1, null, null, null);
const c2 = new Node(2, null, null, null);
const c3 = new Node(3, null, null, null);
const c4 = new Node(4, null, null, null);
const c5 = new Node(5, null, null, null);

c1.child = c2;
c2.child = c3;
c3.child = c4;
c4.child = c5;

function iPrint(po) {
  let res = '';
  while (po) {
    res += ' ';
    res += po.val;
    po = po.next;
  }
  console.log('res', res);
}

iPrint(c1);

const response = flatten(c1);

iPrint(response);
