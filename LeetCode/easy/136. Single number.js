/*

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/* O(2n) */
var singleNumber = function (nums) {
  let ref = {};
  for (let i = 0; i < nums.length; i++) {
    if (ref.hasOwnProperty(nums[i])) {
      ref[nums[i]]++;
    } else {
      ref[nums[i]] = 1;
    }
  }

  for (let key in ref) {
    if (ref[key] === 1) {
      return Number(key);
    }
  }
};

/* O(n) */
/* but assuming all other instances will be even */
// var singleNumber = function(nums) {
//   let ref = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (ref.hasOwnProperty(nums[i])) {
//       delete ref[nums[i]];
//     } else {
//       ref[nums[i]] = 1;
//     }
//   }
//   return Number(Object.keys(ref)[0]);
// };

let cases = [
  { in: [2, 3, 3, 2, 1, 3], out: 1 },
  { in: [4, 1, 2, 1, 2], out: 4 },
];

const tester = require('../tester');

tester(cases, singleNumber);
