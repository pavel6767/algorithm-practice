/*

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*
  time O(n)
  map{t: i}
  iter
    if map has remainder target-arr[i]
      return the pair
    else
      add current elem
*/

// t O(n)
// s O(n)
// var twoSum = function (numbers, target) {
//   const map = {};
//   for (let i = 0; i < numbers.length; i++) {
//     let rem = target - numbers[i];
//     if (map.hasOwnProperty(rem)) {
//       return [map[rem] + 1, i + 1];
//     } else {
//       map[numbers[i]] = i;
//     }
//   }
//  return []
// };

/*
test from edges

test leftmost and rightmost
if  sum is equal return indices
if sum > target
  decrease right
sum <
  incrase left

*/
// t O(n)
// s O(1)
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (target === sum) return [left + 1, right + 1];
    else if (sum > target) right--;
    else if (sum < target) left++;
  }
  return [];
};

let cases = [
  {
    in: [2, 7, 11, 15],
    in2: 9,
    out: [1, 2],
  },
  {
    in: [2, 3, 4],
    in2: 6,
    out: [1, 3],
  },
];

const tester = require('../tester');
tester.twoInput(cases, twoSum);
