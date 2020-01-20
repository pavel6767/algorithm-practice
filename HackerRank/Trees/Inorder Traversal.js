/*

Complete the inOrder function in your editor below, which has  parameter: a pointer to the root of a binary tree. It must print the values in the tree's inorder traversal as a single line of space-separated values.

Input Format

Our hidden tester code passes the root node of a binary tree to your inOrder function.

Constraints

1 Nodes in the tree  500

Output Format

Print the tree's inorder traversal as a single line of space-separated values.

Sample Input

     1
      \
       2
        \
         5
        /  \
       3    6
        \
         4
Sample Output

1 2 3 4 5 6

*/

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function inorderTraverse(node) {
  if (node == null) {
    return null;
  }
  let res = [];

  let left = inorderTraverse(node.left);
  if (left != null && left.length > 0) {
    res.push(...left);
  }
  res.push(node.val);

  let right = inorderTraverse(node.right);
  if (right != null && right.length > 0) {
    res.push(...right);
  }

  return res;
}
/*

     1
      \
       2
        \
         5
        /  \
       3    6
        \
         4

*/
let tree = new TreeNode(1);
tree.right = new TreeNode(2);
tree.right.right = new TreeNode(5);
tree.right.right.left = new TreeNode(3);
tree.right.right.left.right = new TreeNode(4);
tree.right.right.right = new TreeNode(6);

console.log(inorderTraverse(tree));
