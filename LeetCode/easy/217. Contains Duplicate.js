/*

Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:
  Input: [1,2,3,1]
  Output: true

Example 2:
  Input: [1,2,3,4]
  Output: false

Example 3:
  Input: [1,1,1,3,3,4,3,2,4,2]
  Output: true


*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
  time O(n)
  space O(n)
*/
var containsDuplicate = function (nums) {
  // const map = {};
  // for (let i = 0; i < nums.length; i++) {
  //   if (map.hasOwnProperty(nums[i])) {
  //     return true;
  //   } else {
  //     map[nums[i]] = true;
  //   }
  // }
  // return false;

  return nums.length !== new Set(nums).size;
};

let cases = [
  { in: [1, 2, 3, 1], out: true },
  { in: [1, 2, 3, 4], out: false },
  { in: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2], out: true },
];

const tester = require('../tester');
tester(cases, containsDuplicate);
