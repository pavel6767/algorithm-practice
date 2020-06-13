/*

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:
Input: [3,0,1]
Output: 2

Example 2:
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
>> [int] [0..n]
<< int missing int

O(n+nlogn)
sort arr desc
iter
    break when curr !== next+1


O(2n)
arr len = max num
add all nums from sigma(max..1)
iter arr
    subtract elem frm sigma
return remainder
*/
var missingNumber = function(n) {
    let curr = n.length
    let res = 0
    
    for(let i=0; i<n.length; i++) {
        res -= n[i]
        res += curr--
    }
    return res
};

let cases = [
    {
      in:  [3,0,1],
      out: 2,
    },
    {
      in:  [9,6,4,2,3,5,7,0,1],
      out: 8,
    },
  ];  
  
  const tester = require('../tester');
  tester.oneInput(cases, missingNumber);
  
  module.exports = missingNumber;