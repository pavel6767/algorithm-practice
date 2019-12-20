/*

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

const ONE = '1';
const ZERO = '0';

var addBinary = function(a, b) {
  let res = '';

  let carry = false;
  let current;

  let iA = a.length - 1;
  let iB = b.length - 1;

  while (iA >= 0 || iB >= 0) {
    ({ current, carry } = binHelper(a[iA], b[iB], carry));
    res = current + res;
    iA--;
    iB--;
  }

  if (carry === true) {
    res = ONE + res;
  }
  return res;
};

function binHelper(a = ZERO, b = ZERO, carry) {
  let current;

  if (a === ONE && b === ONE) {
    current = carry === true ? ONE : ZERO;
    carry = true;
  } else if (a === ZERO && b === ZERO) {
    current = carry === true ? ONE : ZERO;
    carry = false;
  } else {
    current = carry === true ? ZERO : ONE;
    carry = current === ZERO ? true : false;
  }
  return { current, carry };
}

let a = '100';
let b = '110010';
//      "110110"
console.log(addBinary(a, b));
