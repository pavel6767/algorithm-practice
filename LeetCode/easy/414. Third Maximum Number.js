/*

Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]
Output: 1
Explanation: The third maximum is 1.

Example 2:
Input: [1, 2]
Output: 2
Explanation: The third maximum does not exist, so the maximum (2) is returned instead.

Example 3:
Input: [2, 2, 3, 1]
Output: 1
Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

/*

>>[int]
<< int 3rd max val
if [].len <3
    << max val

sort arr desc

check for len < 3
    return max

iter
    find 3rd unique num

*/
var thirdMax = function(n) {
    n.sort((a,b)=> b-a)
    
    if(n.length < 3) return n[0]
    
    const record = {}
    let i=0
    while(Object.keys(record).length<3) {
        if(i === n.length) {
            return n[0]
        }
        if(!record.hasOwnProperty(n[i])) {
            record[n[i]] = true
        }
        i++
    }
    return n[i-1]
};

let cases = [
    {
      in:  [3, 2, 1],
      out: 1,
    },
    {
      in:  [1, 2],
      out: 2,
    },
    {
      in:  [2, 2, 3, 1],
      out: 1,
    },

  ];  
  
  const tester = require('../tester');
  tester.oneInput(cases, thirdMax);
  
  module.exports = thirdMax;