/*

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

Note:

Only the space character ' ' is considered as whitespace character.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. If the numerical value is out of the range of representable values, INT_MAX (2^31 − 1) or INT_MIN (−2^31) is returned.

Example 1:
  Input: "42"
  Output: 42

Example 2:
  Input: "   -42"
  Output: -42
  Explanation: The first non-whitespace character is '-', which is the minus sign.
             Then take as many numerical digits as possible, which gets 42.

Example 3:
  Input: "4193 with words"
  Output: 4193
  Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.

Example 4:
  Input: "words and 987"
  Output: 0
  Explanation: The first non-whitespace character is 'w', which is not a numerical
             digit or a +/- sign. Therefore no valid conversion could be performed.

Example 5:
  Input: "-91283472332"
  Output: -2147483648
  Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
             Thefore INT_MIN (−2^31) is returned.

*/

/*
  time
    O(n)
  space
    O(n)
*/

/**
 * @param {string} str
 * @return {number}
 */

var myAtoi = function (str) {
  let sign = null;
  let res = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      if (str[i] === '+' || str[i] === '-') {
        if (sign == null && res.length == 0) {
          sign = str[i] === '+' ? 1 : -1;
        } else {
          break;
        }
      } else if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
        res += str[i];
      } else {
        break;
      }
    } else if (sign != null || res.length !== 0) {
      break;
    }
  }

  if (res === '') {
    return 0;
  }

  sign = sign == null ? 1 : sign;

  if (Number(res) >= Math.pow(2, 31)) {
    return sign === -1 ? sign * Math.pow(2, 31) : Math.pow(2, 31) - 1;
  }

  return sign * Number(res);
};

let cases = [
  { in: '42', out: 42 },
  { in: '   -42', out: -42 },
  { in: '4193 with words', out: 4193 },
  { in: 'words and 987', out: 0 },
  { in: '-91283472332', out: -2147483648 },
  { in: '   +0 123', out: 0 },
  { in: '2147483648', out: 2147483647 },
  { in: '-2147483648', out: -2147483648 },
  { in: '2147483800', out: 2147483647 },
  { in: '0-1', out: 0 },
  { in: '-5-', out: -5 },
];

const tester = require('../tester');
tester.oneInput(cases, myAtoi);
