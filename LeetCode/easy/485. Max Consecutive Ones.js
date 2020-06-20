/*

485. Max Consecutive Ones
Easy

629

359

Add to List

Share
Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
    max =0
    iter n
        keep track of max
*/
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let temp = 0
    for(let val of nums) {
        if(val === 1) {
            temp++
        } else {
            max = Math.max(max,temp)
            temp = 0
        }
    }
    return Math.max(max,temp)
};

let cases = [
  { in: [1,1,0,1,1,1], out:3 }
];

const tester = require('../tester');
tester.oneInput(cases, findMaxConsecutiveOnes);
