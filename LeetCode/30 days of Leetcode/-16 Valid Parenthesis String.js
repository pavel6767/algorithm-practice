/*

Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
An empty string is also valid.

Example 1:
  Input: "()"
  Output: True

Example 2:
  Input: "(*)"
  Output: True

Example 3:
  Input: "(*))"
  Output: True

Note:
The string size will be in the range [1, 100].

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  // const map = {
  //   "(":")",
  // }
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    /*

    )())))
    case (
    case )
    case *

    *)
    */
    if (s[i] === ')') {
      if (s[i] === '*') {
        if (stack[stack.length - 1] === '(') {
          stack.push(')');
        } else {
          stack.push('(');
        }
      } else {
        if (stack[stack.length - 1] !== '(') {
          return false;
        }
      }
    } else {
      if (s[i] === '*') {
      } else {
      }
    }
  }

  return true;
};

let cases = [
  { in: '()', out: true },
  { in: '(*)', out: true },
  { in: '(*))', out: true },
];

const tester = require('../tester');
tester(cases, lastStoneWeight);
