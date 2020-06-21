/*

Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]

Example 1:
Input: [2,1]
Output: false

Example 2:
Input: [3,5,5]
Output: false

Example 3:
Input: [0,3,2,1]
Output: true
 

Note:

0 <= A.length <= 10000
0 <= A[i] <= 10000 

*/

/**
 * @param {number[]} A
 * @return {boolean}
 */

/*
    iter for climb
    iter for fall
    add checks in between
*/
/*
t O(n)
s O(1)
*/
// var validMountainArray = function(arr) {
// if(arr.length < 3) return false

// let prev = 0, 
//     curr = 1
    
//     if(arr[prev] > arr[curr]) return false
    
//     while(arr[prev]<arr[curr]) {
//         prev++
//         curr++
//     }
    
//     if(prev === arr.length-1) return false
    
//     while(curr<arr.length && arr[prev] > arr[curr]) {
//         prev++
//         curr++
//     }
//     return prev === arr.length-1
// };


/*
t O(n)
s O(1)
*/
var validMountainArray = function(arr) {
    if(arr.length < 3) return false
    
    let increasing = true

    if(arr[0]>arr[1]) return false
    
    for(let i=2; i<arr.length; i++) {
        if(increasing) {
            if(arr[i]===arr[i-1]) return false
            if(arr[i]<arr[i-1]) increasing = false
        } else {
            if(arr[i] >= arr[i-1]) return false
        }
    }
    
    return true
}

let cases = [
  { in: [2,1], out: false },
  { in: [3,5,5], out: false },
  { in: [0,3,2,1], out: true },
  { in: [0,2,3,4,5,2,1,0], out: true },
  { in: [0,2,3,3,5,2,1,0], out: false },
];

const tester = require('../tester');
tester.oneInput(cases, validMountainArray);