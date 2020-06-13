/*
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 /*
sweep left
sweep right
 */
var findUnsortedSubarray = function(n) {
    let right= n.length-1
    while(right>0 && n[right]>n[right-1]) {
        right--
    }

    let left = 0
    while(left <n.length && n[left]<n[left+1]) {
        left++
    }
    
    let min = max = n[left]
    for(let i = left+1; i<=right; i++) {
        min = Math.min(min, n[i])
        max = Math.max(max, n[i])
    }
    
    while(n[left] > min) {
        left--
    }
    left++
    while(n[right]<max) {
        right++
    }
    right--

    return right - left
};

let cases = [
    {
      in:  [2, 6, 4, 8, 10, 9, 15],
      out: 5,
    },
    // {
    //   in:  [10, 12, 20, 30, 25, 40, 32, 31, 35, 50, 60],
    //   out: [3,8],
    // },
    // {
    //   in: [0, 1, 15, 25, 6, 7, 30, 40, 50],
    //   out: [2,5],
    // },
  ];  
  
  const tester = require('../tester');
  tester.oneInput(cases, findUnsortedSubarray);
  
  module.exports = findUnsortedSubarray;
  