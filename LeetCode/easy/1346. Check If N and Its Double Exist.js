/*

Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

More formally check if there exists two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
Example 2:

Input: arr = [7,1,14,11]
Output: true
Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
Example 3:

Input: arr = [3,1,7,11]
Output: false
Explanation: In this case does not exist N and M, such that N = 2 * M.
 

Constraints:

2 <= arr.length <= 500
-10^3 <= arr[i] <= 10^3
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */

/*
2nlogn
sort arr
iter
    search for curr*2

n**2
iter
    linear search 

*/
var checkIfExist = function(arr) {
    arr.sort((a,b)=> a-b)
    
    function helper(i, target) {
        let left = arr[i] < 0 ? 0 : i+1,
            right = arr.length-1
        while(left<=right) {
            let mid = Math.floor((right-left)/2) + left
            
            if(arr[mid]===target) return true
            if(arr[mid] < target) {
                left = mid+1
            } else {
                right = mid-1
            }
        }
        return false
    }
    
    for(let i=0; i<arr.length; i++) {
        if(helper(i, arr[i]*2) === true) return true
    }
    
    return false
};

let cases = [
  { in: [7,1,14,11], out: true },
  { in: [10,2,5,3], out: true },
  { in: [3,1,7,11], out: false },
  { in: [-10,12,-20,-8,15], out: true },
];

const tester = require('../tester');
tester.oneInput(cases, checkIfExist);