/*

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum =
      nums[i] > currentSum + nums[i] ? nums[i] : currentSum + nums[i];
    maxSum = maxSum > currentSum ? maxSum : currentSum;
  }

  return maxSum;
};

let cases = [{ in: [-2, 1, -3, 4, -1, 2, 1, -5, 4], out: 6 }];

function tester(cases, cb) {
  let current;
  for (let i = 0; i < cases.length; i++) {
    current = cb(cases[i].in);
    console.log(`\n${cases[i].in} ::: ${cases[i].out}`);
    console.log(cases[i].out === current ? 'pass' : `fail :: , ${current}`);
  }
}
tester(cases, maxSubArray);
