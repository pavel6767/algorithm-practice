/*

Given a 2D integer array board representing the grid of candy, different positive integers board[i][j] represent different types of candies. A value of board[i][j] = 0 represents that the cell at position (i, j) is empty. The given board represents the state of the game following the player's move. Now, you need to restore the board to a stable state by crushing candies according to the following rules:

If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.
After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)
After the above steps, there may exist more candies that can be crushed. If so, you need to repeat the above steps.
If there does not exist more candies that can be crushed (ie. the board is stable), then return the current board.
You need to perform the above rules until the board becomes stable, then return the current board.

Example
Example 1:

Input:
  [
    [110,5,112,113,114],
    [210,211,5,213,214],
    [310,311,3,313,314],
    [410,411,412,5,414],
    [5,1,512,3,3],
    [610,4,1,613,614],
    [710,1,2,713,714],
    [810,1,2,1,1],
    [1,1,2,2,2],
    [4,1,4,4,1014]
  ]
Output:
  [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [110,0,0,0,114],
    [210,0,0,0,214],
    [310,0,0,113,314],
    [410,0,0,213,414],
    [610,211,112,313,614],
    [710,311,412,613,714],
    [810,411,512,713,1014]
  ]
Explanation

Example 2:

Input: [[1,3,5,5,2],[3,4,3,3,1],[3,2,4,5,2],[2,4,4,5,5],[1,4,4,1,1]]
Output: [[1,3,0,0,0],[3,4,0,5,2],[3,2,0,3,1],[2,4,0,5,2],[1,4,3,1,1]]
Notice
The length of board will be in the range [3, 50].
The length of board[i] will be in the range [3, 50].
Each board[i][j] will initially start as an integer in the range [1, 2000].

*/

/**
 * @param board: a 2D integer array
 * @return: the current board
 */

/*
hash {
  j: [i]
}

[0,1,2,5,6,7]


[0,1,2,5,6,7]
[0,1,2,5,6,7]
[0,1,2,5,6,7]
[0,1,2,5,6,7]
[0,1,2,5,6,7]
[0,1,2,5,6,7]

{
  0:[0,1,2,3,4,5]
}
depth
i 5,
j 0

currI = i-depth >=0 ? 0 : 0
curr = board[currI][j]
while flagged
  check each node for adjacent equality >=3
  in cardinal directions
  if true
    flag coordinates for moving col down

  remove flagged inxs
  iter hash keys // board[val][key]
    for each val in hash[key]
      check extent of continuity
      drop len of continuity in col(curr j)

  iter col
    iter row - 2
      check abs(curr) vs next 3
        if same, flag as negative self

  iter row
    iter col-2
      check abs(curr) vs next 3
        if same, flag as negative self

  iter row
    iter col from end up



*/
const candyCrush = function (board) {
  let flagged = true;
  while (flagged) {
    flagged = false;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length - 2; j++) {
        let curr = Math.abs(board[i][j]);
        let b = 1;

        while (
          curr !== 0 &&
          j + b < board.length &&
          curr === Math.abs(board[i][j + b])
        ) {
          b++;
        }

        if (b >= 3) {
          flagged = true;
          while (b > 0) {
            board[i][j] = -curr;
            b--;
            j++;
          }
          j--;
        }
      }
    }

    for (let j = 0; j < board[0].length; j++) {
      for (let i = 0; i < board.length - 2; i++) {
        let curr = Math.abs(board[i][j]);
        let b = 1;

        while (
          curr !== 0 &&
          i + b < board.length &&
          curr === Math.abs(board[i + b][j])
        ) {
          b++;
        }

        if (b >= 3) {
          flagged = true;
          while (b > 0) {
            board[i][j] = -curr;
            b--;
            i++;
          }
          i--;
        }
      }
    }

    if (flagged) {
      for (let j = board[0].length - 1; j >= 0; j--) {
        let base = board.length - 1;
        for (let i = board.length - 1; i >= 0; i--) {
          if (board[i][j] > 0) {
            board[base][j] = board[i][j];
            base--;
          }
        }
        while (base >= 0) {
          board[base][j] = 0;
          base--;
        }
      }
    }
  }
  return board;
};

let cases = [
  {
    in: [
      [110, 5, 112, 113, 114],
      [210, 211, 5, 213, 214],
      [310, 311, 3, 313, 314],
      [410, 411, 412, 5, 414],
      [5, 1, 512, 3, 3],
      [610, 4, 1, 613, 614],
      [710, 1, 2, 713, 714],
      [810, 1, 2, 1, 1],
      [1, 1, 2, 2, 2],
      [4, 1, 4, 4, 1014],
    ],
    out: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [110, 0, 0, 0, 114],
      [210, 0, 0, 0, 214],
      [310, 0, 0, 113, 314],
      [410, 0, 0, 213, 414],
      [610, 211, 112, 313, 614],
      [710, 311, 412, 613, 714],
      [810, 411, 512, 713, 1014],
    ],
  },
  {
    in: [
      [1, 3, 5, 5, 2],
      [3, 4, 3, 3, 1],
      [3, 2, 4, 5, 2],
      [2, 4, 4, 5, 5],
      [1, 4, 4, 1, 1],
    ],
    out: [
      [1, 3, 0, 0, 0],
      [3, 4, 0, 5, 2],
      [3, 2, 0, 3, 1],
      [2, 4, 0, 5, 2],
      [1, 4, 3, 1, 1],
    ],
  },
];

const tester = require('../tester');
tester.oneInput(cases, candyCrush);
