/*

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */

// Option 1 - modifying the input array
var plusOne = function(digits) {
  let current = 0;
  let carry = 0;

  current = digits[digits.length - 1] + 1;

  if (current < 10) {
    digits[digits.length - 1] = current;
    return digits;
  } else {
    digits[digits.length - 1] = current % 10;
    carry = 1;

    for (let i = digits.length - 2; i >= 0; i--) {
      current = digits[i] + carry;
      digits[i] = current % 10;

      if (current > 9) {
        carry = 1;
      } else {
        carry = 0;
        break;
      }
    }
    if (carry === 1) {
      digits.unshift(1);
    }
  }

  return digits;
};

// Option 2 - making a second array and unshifting
// var plusOne = function(digits) {
//   let response = [];
//   let current = 0;
//   let carry = 0;

//   current = digits[digits.length - 1] + 1;

//   if (current < 10) {
//     digits[digits.length - 1] = current;
//     return digits;
//   } else {
//     response.unshift(current % 10);
//     carry = 1;
//     for (let i = digits.length - 2; i >= 0; i--) {
//       current = digits[i] + carry;
//       response.unshift(current % 10);

//       if (current > 9) {
//         carry = 1;
//       } else {
//         carry = 0;
//         response.unshift(...digits.slice(0, i));
//         break;
//       }
//     }
//     if (carry === 1) {
//       response.unshift(1);
//     }
//   }

//   return response;
// };

// Option 3 - turn the array into a number, add, then back to array
// maybe not so safe, because trusting JS with math

let input = [9, 9, 9];
console.log(plusOne(input));
