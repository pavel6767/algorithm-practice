/*

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3

*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {};

let l1 = new TreeNode(1);
l1.left = new TreeNode(2);
l1.left.left = new TreeNode(3);
l1.left.right = new TreeNode(4);
l1.right = new TreeNode(2);
l1.right.right = new TreeNode(2);
l1.right.left = new TreeNode(4);

console.log(isSameTree(l1, l2));
