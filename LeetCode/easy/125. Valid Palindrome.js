/*

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
  Input: "A man, a plan, a canal: Panama"
  Output: true

Example 2:
  Input: "race a car"
  Output: false

*/

/*
  time O(3n)
  space O(m)
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  let str = s
    .split('')
    .filter(
      (c) =>
        (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) ||
        (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) ||
        (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122),
    );

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase()) {
      return false;
    }
  }

  return true;
};

let cases = [
  { in: 'A man, a plan, a canal: Panama', out: true },
  { in: 'race a car', out: false },
  { in: '`l;`` 1o1 ??;l`', out: true },
];

const tester = require('../tester');
tester.oneInput(cases, isPalindrome);
