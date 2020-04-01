/*

A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

*/

let list = [
  -6,
  -3,
  -2,
  -1,
  0,
  1,
  3,
  4,
  5,
  7,
  8,
  9,
  10,
  11,
  14,
  15,
  17,
  18,
  19,
  20,
];

function solution(list) {
  let res = [];
  let compressing = false;
  let tempBase;
  for (let i = 0; i < list.length; i++) {
    if (list[i] + 1 === list[i + 1]) {
      if (!compressing) {
        tempBase = list[i];
        compressing = true;
      }
    } else {
      if (compressing) {
        if (list[i] - 1 === tempBase) {
          res.push(tempBase, list[i]);
        } else {
          res.push(`${tempBase}-${list[i]}`);
        }
        compressing = false;
      } else {
        res.push(`${list[i]}`);
      }
    }
  }
  return res.join();
}

console.log(solution(list) === '-6,-3-1,3-5,7-11,14,15,17-20');
console.log(solution(list));
console.log('-6,-3-1,3-5,7-11,14,15,17-20');
