/*

Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []]
Output: [[0,1,3],[0,2,3]]
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
Note:

The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.

*/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

/*
[[1,2], [3], [3], []]

dfs
013
023

[[1,2], [3], [3], []]

res
  01

start at first node
  dfs on first node for all children
    dfs on all child elem
      when get len-1 inx, add path to res



*/
/*
[0]
[0,1]
[0,1,2]
[0,1,2,3]

*/
var allPathsSourceTarget = function (graph, inx = 0, path = [inx], res = []) {
  if (inx === graph.length - 1) {
    res.push([...path]);
    return path;
  }

  for (let child of graph[inx]) {
    allPathsSourceTarget(graph, child, [...path, child], res);
  }
  return res;
};

let cases = [
  {
    in: [[1, 2], [3], [3], []],
    out: [
      [0, 1, 3],
      [0, 2, 3],
    ],
  },
];

const tester = require('../tester');
tester.oneInput(cases, allPathsSourceTarget);
