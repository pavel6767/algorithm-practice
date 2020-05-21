/*

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:
  Input:
  [
  [[1],[1],[1],[1],[0]],
  [[1],[1],[0],[1],[0]],
  [[1],[1],[0],[0],[0]],
  [[0],[0],[0],[0],[0]],
  ]

  1,1,1,1,1,1,1
  0,0,0,0,0,0,1
  0,0,0,0,1,0,1
  0,0,0,0,1,1,1

  Output: [1],

Example 2:
  Input:
  [[1],[1],[0],[0],[0]],
  [[1],[1],[0],[0],[0]],
  [[0],[0],[1],[0],[0]],
  [[0],[0],[0],[1],[1]],

  Output: 3

*/

/*
i row
j col

check amount of islands
island is 1, either by itself or many
many are connected cardinal i+/-1 j+/-1
no diagonals

count = 0
iterate rows
  iterate els in row
    if 1
      count++
      mark curr as 0
      check where it leads to other 1
        in all card dir
return count
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

/*
t
  O(n*m)
s
  O(1)
*/

var numIslands = function (grid) {
  function helper(i, j) {
    if (
      i < 0 ||
      j < 0 ||
      i > grid.length - 1 ||
      j > grid[i].length - 1 ||
      grid[i][j] === 0
    )
      return;

    grid[i][j] = 0;

    helper(i + 1, j);
    helper(i, j + 1);
    helper(i - 1, j);
    helper(i, j - 1);
  }

  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        count++;
        helper(i, j);
      }
    }
  }
  return count;
};

let cases = [
  {
    in: [
      [1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    out: 1,
  },
  {
    in: [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
    ],
    out: 3,
  },
];

const tester = require('../tester');
tester.oneInput(cases, numIslands);
