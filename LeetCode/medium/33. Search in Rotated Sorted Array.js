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
/*
>> [int]
>> int
<< int i||-1

{
    in: [0,1,2,4,5,6,7],
    in2:2,
    
}

l 0
r 6
m 3

l 0
r 3
m 1

l 1
r 3
m 1

l
r
m
*/
// var search = function(nums, target) {
//     let left = 0
//     let right = nums.length-1
    
//     while(left<=right) {
//         let m = Math.floor((right+left)/2)
//         if(nums[m] === target) return m

//         if(target > nums[m]) {
//             left = m + 1
//         } else {
//             right = m - 1 
//         }
//     }

//     return -1
// };

/*
consider offset..
 0 1 2 3 4 5 6
[4,5,6,7,0,1,2]
t 0

first check l vs m
    if normal l<m
        check target
*/
var search = function(n, target) {
    let left = 0
    let right = n.length-1
    
    while(left<right) {
        let mid = Math.floor((right-left)/2) + left

        if(n[mid] > n[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    let start = left
    left = 0
    right = n.length-1

    if(target >= n[start] && target <= n[right]) {
        left = start
    } else {
        right = start
    }

    while(left<= right) {
        let mid = Math.floor((right-left)/2) + left

        if(n[mid] === target) return mid

        if(target < n[mid]) {
            right = mid-1
        } else {
            left = mid+1
        }
    }

    return -1
};

let cases = [
    {
      in: [4,5,6,7,0,1,2],
      in2:0,
      out: 4,
    },
    {
      in: [4,5,6,7,0,1,2],
      in2:3,
      out: -1,
    },
  ];  
  
  const tester = require('../tester');
  tester.twoInput(cases, search);
  
  module.exports = search;
  