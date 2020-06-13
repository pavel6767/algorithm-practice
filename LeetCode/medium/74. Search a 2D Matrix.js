/*

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true

Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false

*/

/*
  time
    O(2n -> n)
  space
    O(n+log10n -> n)
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
>> matrix, target
<< bool

embed binary search

O((logn)**2)
binary determine which row to search check (row[0] <= target <= row[end])
    binary search row    
*/
var searchMatrix = function(matrix, target) {
  if(matrix.length === 0) return false
  
let left = 0, right = matrix.length-1
let mid = 0
while(!(matrix[mid][0] <= target && target <= matrix[mid][matrix[mid].length-1])) {
    mid = Math.floor((right-left)/2) +left
    if(left > right || left < 0 || right >= matrix.length) return false
    if(target < matrix[mid][0]) {
        right = mid-1
    } else {
        left = mid+1
    }
}

  left = 0, right = matrix[mid].length-1
  let col = 0, row = matrix[mid]
  while(left <= right) {
      col = Math.floor((right-left)/2) +left
      if(target === row[col]) return true
      
      if(target > row[col]) {
          left = col+1
      } else {
          right = col-1
      }
  }
  return false
};

let cases = [
  { in: [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ],
  in2:3, 
  out: true 
},
  { in: [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ],
  in2:13, 
  out: false 
},
  
];

const tester = require('../tester');
tester.twoInput(cases, searchMatrix);
