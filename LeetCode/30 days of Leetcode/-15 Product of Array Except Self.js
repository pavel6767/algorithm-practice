/*

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
time O(n^2)
space O(n)
*/
// var productExceptSelf = function (nums) {
//   let curr;
//   let leftProd = 1;
//   const res = [];

//   nums.forEach((val, i) => {
//     curr = 1;
//     for (let j = i + 1; j < nums.length; j++) {
//       curr *= nums[j];
//     }
//     res.push(curr * leftProd);
//     leftProd *= val;
//   });

//   return res;
// };

/*
  time O(2n)
  space O(n)
*/

// var productExceptSelf = function (nums) {
//   let leftProd = 1;
//   let rightProd = 1;
//   const res = [];

//   nums.forEach((val, i, self) => {
//     res.push(leftProd);
//     leftProd *= val;
//   });

//   for (let j = nums.length - 1; j >= 0; j--) {
//     console.log(res[j]);
//     res[j] *= rightProd;
//     rightProd *= nums[j];
//   }

//   return res;
// };

var productExceptSelf = function (nums) {
  let leftProd = 1;
  let rightProd = 1;
  const res = [];

  let temp;
  nums.forEach((val, i, self) => {
    // console.log('\ni ', i);
    temp = leftProd;
    res[self.length - 1 - i] = rightProd;
    // console.log('leftProd ', leftProd);
    // console.log('rightProd ', rightProd);

    leftProd *= val;
    rightProd *= self[self.length - 1 - i];
    // console.log('leftProd  after ', leftProd);
    // console.log('rightProd  after ', rightProd);
    res[i] = typeof res[i] === 'number' ? res[i] * temp : temp;
  });

  return res;
};

let cases = [
  // { in: [1, 2, 3, 4], out: [24, 12, 8, 6] },
  // { in: [0, 0], out: [0, 0] },
  // { in: [1, 1], out: [1, 1] },
  // { in: [1, 0], out: [0, 1] },
  { in: [4, 3, 2, 1, 2], out: [12, 16, 24, 48, 24] },
];

const tester = require('../tester');
tester(cases, productExceptSelf);
