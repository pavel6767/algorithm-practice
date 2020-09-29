/*

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false

*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
  let p1 = p,
    p2 = q;

  if ((p == null) & (q == null)) {
    return true;
  } else if ((p == null) ^ (q == null)) {
    return false;
  } else if (p1.val === p2.val) {
    return isSameTree(p1.left, p2.left) && isSameTree(p1.right, p2.right);
  }
  return false;
};

/* true */
// let l1 = new TreeNode(1);
// l1.left = new TreeNode(2);
// l1.right = new TreeNode(3);

// let l2 = new TreeNode(1);
// l2.left = new TreeNode(2);
// l2.right = new TreeNode(3);

/* false */
