/*

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

 

Example 1:

Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
 

Constraints:

1 <= arr.length <= 10^4
1 <= arr[i] <= 10^5

 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */

/*
t O(n**2)
s O(1)
*/
// var replaceElements = function(arr) {
    
//     for(let i=0; i<arr.length-1;i++) {
//         let tempMax = null
//         for(let j=i+1; j<arr.length; j++) {
//             tempMax = Math.max(tempMax,arr[j])
//         }
//         arr[i] = tempMax
//     }
//     arr[arr.length-1] = -1
//     return arr
// };

/*
t O(n)
s O(1)
*/
var replaceElements = function(arr) {
    let max = arr[arr.length-1]
    for(let i=arr.length-2; i>=0; i--) {
        let temp = arr[i]
        arr[i] = max
        max = Math.max(temp, max)
    }
    arr[arr.length-1] = -1
    
    return arr
}

let cases = [
  { in: [17,18,5,4,6,1], out: [18,6,6,6,1,-1] },
  
];

const tester = require('../tester');
tester.oneInput(cases, replaceElements);
