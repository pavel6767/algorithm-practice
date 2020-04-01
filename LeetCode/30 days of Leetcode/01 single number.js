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
// var singleNumber = function(nums) {
//   let ref = {};
//   for (let i = 0; i < nums.length; i++) {
//     if (ref.hasOwnProperty(nums[i])) {
//       ref[nums[i]]++;
//     } else {
//       ref[nums[i]] = 1;
//     }
//   }

//   for (let key in ref) {
//     if (ref[key] === 1) {
//       return Number(key);
//     }
//   }
// };

/* O(n) */
var singleNumber = function(nums) {
  let ref = {};
  for (let i = 0; i < nums.length; i++) {
    if (ref.hasOwnProperty(nums[i])) {
      delete ref[nums[i]];
    } else {
      ref[nums[i]] = 1;
    }
  }
  return Number(Object.keys(ref)[0]);
};

let cases = [
  { in: [2, 2, 1], out: 1 },
  { in: [4, 1, 2, 1, 2], out: 4 },
];

function tester(cases, cb) {
  // debugger;
  let current;
  for (let i = 0; i < cases.length; i++) {
    current = cb(cases[i].in);
    console.log(`\n${cases[i].in} ::: ${cases[i].out}`);
    // if (cases[i].in === current) {
    console.log(cases[i].out === current ? 'pass' : `fail :: , ${current}`);
  }
}

tester(cases, singleNumber);
