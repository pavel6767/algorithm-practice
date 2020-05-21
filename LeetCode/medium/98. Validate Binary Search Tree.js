/*

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.


Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
check if curr is null
compare curr against both left and right edges
recurse left and right
 */

/*
  t
    O(n)
  s
    O(n)

*/

var isValidBST = function (root, left = null, right = null) {
  if (!root) return true;

  if (
    (right != null && root.val >= right) ||
    (left != null && root.val <= left)
  ) {
    return false;
  }

  if (
    !isValidBST(root.left, left, root.val) ||
    !isValidBST(root.right, root.val, right)
  )
    return false;

  return true;
};

let l = new TreeNode(2);
l.left = new TreeNode(1);
l.right = new TreeNode(3);

let l2 = new TreeNode(5);
l2.left = new TreeNode(1);
l2.right = new TreeNode(4, new TreeNode(3), new TreeNode(6));

let l3 = new TreeNode(1, new TreeNode(1), null);
let l4 = new TreeNode(0, null, new TreeNode(-1));

let cases = [
  { in: l, out: true },
  { in: l2, out: false },
  { in: l3, out: false },
  { in: l4, out: false },
];

const tester = require('../tester');
tester.oneInput(cases, isValidBST);
