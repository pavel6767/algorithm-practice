/*

Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process:
- Starting with any positive integer, replace the number by the sum of the squares of its digits, and
- repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example:

Input: 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

*/

/**
 * @param {number} n
 * @return {boolean}
 */

/* O(n) */
var isHappy = function (n) {
  let sum = 0,
    curr = 0,
    evaluatedNumber = n;
  (remainder = evaluatedNumber), (record = new Set());

  while (evaluatedNumber !== 1) {
    curr = Math.pow(remainder % 10, 2);
    remainder = (remainder - (remainder % 10)) / 10;
    sum += curr;
    console.log('\nnum is ', evaluatedNumber);
    console.log('remainder ', remainder);
    console.log('adding ', curr);
    console.log('sum ', sum);

    if (remainder === 0) {
      if (record.has(evaluatedNumber)) {
        return false;
      }
      record.add(evaluatedNumber);
      evaluatedNumber = sum;
      remainder = sum;
      sum = 0;
    }
  }
  return true;
};

let cases = [
  { in: 19, out: true },
  { in: 2, out: false },
];

const tester = require('../tester');
tester(cases, isHappy);
