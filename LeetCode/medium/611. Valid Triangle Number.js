/*

Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
Example 1:
Input: [2,2,3,4]
Output: 3
Explanation:
Valid combinations are:
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
in arr
out int (num of valid triangles)

how are 3 nums valid triangle
a+b > c
c is highest num

[2,2,3,4,5]

check consecutive triplets

a 2
  b 2
  c 3
  num 1
advance c till end
b++
c  =b+1

iter arr a
  iter b = a+1 < arr.len -1
    iter c = b+1 < arr.len
      if a+b>c, num++
*/
/*
  t O(n**3)
  s O(n)
*/
var triangleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let n = 0;

  for (let a = 0; a < nums.length - 2; a++) {
    if (nums[a] === 0) continue;
    for (let b = a + 1; b < nums.length - 1; b++) {
      if (nums[b] === 0) continue;
      for (let c = b + 1; c < nums.length; c++) {
        if (nums[c] === 0) continue;
        if (nums[a] + nums[b] > nums[c]) n++;
      }
    }
  }

  return n;
};
/*
[0,1,0]

a 0
b 1
c 0

*/
let cases = [
  // {
  //   in: [2, 2, 3, 4],
  //   out: 3,
  // },
  // {
  //   in: [0, 1, 0],
  //   out: 0,
  // },
  {
    in: [24, 3, 82, 22, 35, 84, 19],
    out: 10,
  },
];

const tester = require('../tester');
tester.oneInput(cases, triangleNumber);
