/*

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \
      4   5
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

*/

//  Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let currentMax = 1;

  maxDepth(root);

  function maxDepth(node) {
    if (node === null) {
      return 0;
    }

    let left = maxDepth(node.left);
    let right = maxDepth(node.right);
    currentMax = Math.max(currentMax, left + right + 1);
    return Math.max(left, right) + 1;
  }
  return currentMax - 1;
};

let firstCase = new TreeNode(1);
firstCase.left = new TreeNode(2);
firstCase.left.left = new TreeNode(4);
firstCase.left.right = new TreeNode(5);
firstCase.right = new TreeNode(3);

let cases = [
  {
    in: firstCase,
    out: 2,
  },
];

const tester = require('../tester');
tester(cases, diameterOfBinaryTree);
