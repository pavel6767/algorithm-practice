/*

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

Example 2:
  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let rotInx = 0;
  nums.forEach((num, i, self) => {
    if (num > self[i + 1]) {
      rotInx = i + 1;
    }
  });

  let newArr = [...nums.slice(rotInx), ...nums.slice(0, rotInx)];

  let res = 0;
  let left = 0,
    right = newArr.length - 1;
  let mid;

  while (left <= right) {
    // console.log('loop ', res);

    mid = Math.ceil((left + right) / 2);
    if (newArr[mid] <= target) {
      left = mid + 1;
      res = mid;
      // console.log('less');
    } else {
      // console.log('more');
      right = mid - 1;
    }
    // console.log('left ', left);
    // console.log('right ', right);
  }
  return newArr[res] === target ? res - rotInx : -1;
};

let cases = [
  { in: [4, 5, 6, 7, 0, 1, 2], in2: 0, out: 4 },
  { in: [4, 5, 6, 7, 0, 1, 2], in2: 3, out: -1 },
  { in: [1], in2: 1, out: 0 },
  { in: [1, 3], in2: 3, out: 1 },
  { in: [3, 1], in2: 3, out: 0 },
];

function tester(cases, cb) {
  let current;
  for (let i = 0; i < cases.length; i++) {
    current = cb(cases[i].in, cases[i].in2);
    console.log(`\n${cases[i].in} ::: ${cases[i].out}`);
    console.log(cases[i].out === current ? 'pass' : `fail :: ${current}`);
  }
}
tester(cases, search);
