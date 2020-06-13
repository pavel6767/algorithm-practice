/*

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:
Input: [1,3,5,6], 7
Output: 4

Example 4:
Input: [1,3,5,6], 0
Output: 0

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (target === nums[i]) {
//       return i;
//     }

//     if (target <= nums[i]) {
//       return i;
//     }

//     if (i === nums.length - 1) {
//       return nums.length;
//     }
//   }
// };


/**
>> n: [int]sorted
>> t: int
<< int

linear
    iter while elem < target
    insert/find
    
binary search
    return inx || compare currInxVal to target return inx+/-1
*/
var searchInsert = function(n, target) {
  let left =0, right = n.length-1, mid =0
  
  while(left<=right) {
      mid = Math.floor((right-left)/2) + left
      // console.log(`${left} :: ${mid} :: ${right}`)
      if(n[mid] === target) return mid
      
      if(target < n[mid]) { 
          right = mid-1 
      } else {
          left = mid + 1
      }
  }

  if(target < n[mid]) {
    if(left === mid) {
      return mid
    } else if (mid === 0) {
      return 0
    } else {
      return mid-1
    }
  } else {
    return mid+1
  }
  // return target > n[mid] 
  // ? mid+1
  //   : mid === 0
  //     ? 0 
  //     : mid-1
};

let cases = [
  { in: [1,3,5,6], in2:5, out: 2 },
  { in: [1,3,5,6], in2: 2, out: 1 },
  { in: [1,3,5,6], in2: 7, out: 4 },
  { in: [1,3,5,6], in2: 0, out: 0 },
  { in: [1,3], in2: 2, out: 1 }
];

const tester = require('../tester');
tester.twoInput(cases, searchInsert);

