/*

Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?


Example 1:
  Input: nums = [1,2,3,4,5,6,7], k = 3
  Output: [5,6,7,1,2,3,4]
  Explanation:
  rotate 1 steps to the right: [7,1,2,3,4,5,6]
  rotate 2 steps to the right: [6,7,1,2,3,4,5]
  rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
  Input: nums = [-1,-100,3,99], k = 2
  Output: [3,99,-1,-100]
  Explanation:
  rotate 1 steps to the right: [99,-1,-100,3]
  rotate 2 steps to the right: [3,99,-1,-100]

Constraints:

1 <= nums.length <= 2 * 10^4
It's guaranteed that nums[i] fits in a 32 bit-signed integer.
k >= 0

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  nums.unshift(...nums.splice(nums.length - k));
  // for (let i = 1; i <= k; i++) {
  //   nums.unshift(nums.pop());
  // }
  return nums;
};

let cases = [
  { in: [1, 2, 3, 4, 5, 6, 7], k: 3, out: [5, 6, 7, 1, 2, 3, 4] },
  { in: [-1, -100, 3, 99], k: 2, out: [3, 99, -1, -100] },
];

function tester(cases, cb) {
  let current;
  for (let i = 0; i < cases.length; i++) {
    current = cb(cases[i].in, cases[i].k);
    console.log(`\n${cases[i].in} ::: ${cases[i].out}`);
    console.log(
      JSON.stringify(cases[i].out) === JSON.stringify(current)
        ? 'pass'
        : `fail :: ${current}`,
    );
  }
}
tester(cases, rotate);
