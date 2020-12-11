/*

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.



Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

[[0,1,0,1],
 [1,1,0,1],
 [0,1,0,1],
 [1,1,1,1]]

*/

/*
  time
    O(n*m)
  space
    O(n*m)
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
// var islandPerimeter = function (grid) {
//   let sum = 0;

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === 1) {
//         if (i === 0 || grid[i - 1][j] === 0) {
//           sum++;
//         }

//         if (j === grid[i].length - 1 || grid[i][j + 1] === 0) {
//           sum++;
//         }

//         if (i === grid.length - 1 || grid[i + 1][j] === 0) {
//           sum++;
//         }

//         if (j === 0 || grid[i][j - 1] === 0) {
//           sum++;
//         }
//       }
//     }
//   }

//   return sum;
// };
var islandPerimeter = function(grid) {
  let total = 0
  const set = new Set()
  
  function subHelper(i,j, condition) {
    if(condition) {
      if(grid[i][j] === 0) {
          total++
      } else if (!set.has(`${i}${j}`)) {
          helper(i,j)
      }
    } else {
      total++
    }
  }
  
  function helper(i,j) {
      set.add(`${i}${j}`)
      subHelper(i-1,j, i > 0) // top
      subHelper(i+1,j, i < grid.length-1) // bottom
      subHelper(i,j-1, j > 0) // left
      subHelper(i,j+1, j < grid[i].length-1) // right
  }
  let i=0
  let j=0
  let found = false
  while(i<grid.length) {
    if(found) break
    while(j<grid[i].length) {
      if(grid[i][j] === 1) {
        helper(i,j)
        found = true
        break;
      }
      j++
    }
    i++
  }
  return total
};

let cases = [
  // {
  //   in: [
  //     [1, 1, 1, 1],
  //     [1, 0, 0, 1],
  //     [1, 0, 0, 1],
  //     [1, 0, 0, 1],
  //   ],
  //   out: 22,
  // },
  // {
  //   in: [
  //     [0, 1, 0, 0],
  //     [1, 1, 1, 0],
  //     [0, 1, 0, 0],
  //     [1, 1, 0, 0],
  //   ],
  //   out: 16,
  // },
  // {
  //   in: [[0, 1]],
  //   out: 4,
  // },
  {
    in: [
      [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0],
      [0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0],
      [0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
      [1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
      [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
      [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
      [0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
      [0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0],
      [0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
      [0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0]],
    out: 128,
  },
];

const tester = require('../tester');
tester.oneInput(cases, islandPerimeter);
