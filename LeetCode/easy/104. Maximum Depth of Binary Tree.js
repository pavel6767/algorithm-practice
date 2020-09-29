/*

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

*/


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
/*
    if null 0
    if no children 1
    
    if node has both children
        return whichever child has more depth
    
*/
// var maxDepth = function(root) {
//   if(!root) return 0
//   if(!root.left && !root.right) return 1
  
//   return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1
// };
/*
  stack
  loop
    push(n)
    count++
    n = n.l
  

*/
var maxDepth = function(root) {
  if(!root) return 0
  if(!root.left && !root.right) return 1
  

};
let l1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));


console.log(maxDepth(l1) === 3);