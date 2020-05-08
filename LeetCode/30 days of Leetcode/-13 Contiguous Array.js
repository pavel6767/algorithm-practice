/*

Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
  Input: [0,1]
  Output: 2
  Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.

Example 2:
  Input: [0,1,0]
  Output: 2
  Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

Note: The length of the given binary array will not exceed 50,000.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let start = 0,
    end = 0,
    maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log('\ni ', i);
    console.log('start ', start);
    console.log('end ', end);
    if (nums[i] === nums[i - 1]) {
      console.log('=== ');
      maxLength = maxLength < end - start ? end - start : maxLength;
      console.log('new max ', maxLength);
      start = i;
      end = i;
    } else {
      console.log('!== ');
      end++;
    }
  }
  return maxLength + 1;
};

let cases = [
  { in: [0, 1], out: 2 },
  // { in: [0, 1, 0], out: 2 },
  // { in: [0, 1, 0, 0], out: 2 },
  // { in: [0, 1, 0, 1], out: 4 },
];

const tester = require('../tester');
tester(cases, findMaxLength);
