/*

Given an array nums of integers, return how many of them contain an even number of digits.
 

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
 

Constraints:

1 <= nums.length <= 500
1 <= nums[i] <= 10^5

 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
    init count 0
    iter nums
        (measure num of digits)
        if meas%2===0 add count
    
    helper
        measure mag of 10
        divide by 10 till num =0 trunc
        
*/
var findNumbers = function(nums) {
    let count =0 
    for(let num of nums) {
        if(helper(num) === true) count++
    }
    return count
};

function helper(n) {
    let count =0
    while(n!==0) {
        n = Math.trunc(n/10)
        count++
    }
    return count%2===0
}

let cases = [
  { in: [12,345,2,6,7896], out:2 },
  { in: [555,901,482,1771], out:1 },
];

const tester = require('../tester');
tester.oneInput(cases, findNumbers);
