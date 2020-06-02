/*

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
  return nums;
};
// var moveZeroes = function (nums) {
//   for (let i = nums.length - 1; i >= 0; i--) {
//     if (nums[i] === 0) {
//       nums.push(0);
//       nums.splice(i, 1);
//     }
//   }
//   return nums;
// };

/*  NOT modifying array */
// var moveZeroes = function (nums) {
//   let res = [];
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       count++;
//     } else {
//       res.push(nums[i]);
//     }
//   }
//   res.push(...Array(count).fill(0));
//   return res;
// };

let cases = [
  { in: [0, 1, 0, 3, 12], out: [1, 3, 12, 0, 0] },
  { in: [0, 0, 1], out: [1, 0, 0] },
];

const tester = require('../tester');
tester.oneInput(cases, moveZeroes);
