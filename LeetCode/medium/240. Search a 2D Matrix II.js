/*

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
if t < m[0][0] || t > m[end][end] ret false

find col: m[0][col] is closest below the num
bin search col: m[0][col] <= t <= m[end][col]
    get max col[0]
bin search on col

*/
// var searchMatrix = function(matrix, target) {
//   if(target < matrix[0][0] || target > matrix[matrix.length-1][matrix[0].length-1]) return false

//   function binS(col) {
//       let left =0, right = matrix[0].length-1, m=0
//       while(left<=right) {
//           m = Math.floor((right-left)/2) + left
//           if(matrix[m][col] === target) return true
          
//           if(target < matrix[m][col]) {
//               right = m - 1
//           } else {
//               left = m + 1
//           }
//       }
//       return false
//   }
  
//   const cLen = matrix[0].length-1
//   let left =0, right = matrix.length-1, m = 0


//   while(target >= matrix[0][left] && target <= matrix[cLen][right]) {
//      m = Math.floor((right-left)/2) + left

//      if(target < matrix[0][m]) left = m+1
//      if(target > matrix[cLen][m]) right = m-1
//   }

//   while(left <= right) {
//       m = Math.floor((right-left)/2) + left
//       let res = binS(m)
//       if(res === true) return true
//   }
 
//  return false
// };

var searchMatrix = function(matrix, target) {
  if(matrix.length === 0 || matrix[0].length === 0) return false
  let i = matrix.length-1, j = 0
  
  while(i>=0 && j < matrix[0].length) {
    if(matrix[i][j] === target) return true

    target < matrix[i][j] ? i-- : j++
  }
  return false
}

let cases = [
  // { 
  //   in: [
  //     [1,   4,  7, 11, 15],
  //     [2,   5,  8, 12, 19],
  //     [3,   6,  9, 16, 22],
  //     [10, 13, 14, 17, 24],
  //     [18, 21, 23, 26, 30]
  //   ],
  //   in2:5, 
  //   out: true 
  // },
  // { 
  //   in: [
  //     [1,   4,  7, 11, 15],
  //     [2,   5,  8, 12, 19],
  //     [3,   6,  9, 16, 22],
  //     [10, 13, 14, 17, 24],
  //     [18, 21, 23, 26, 30]
  //   ],
  //   in2:20, 
  //   out: false 
  // },
  { 
    in: 
    [[1,1]],
    in2:0, 
    out: false 
  },

  
];

const tester = require('../tester');
tester.twoInput(cases, searchMatrix);
