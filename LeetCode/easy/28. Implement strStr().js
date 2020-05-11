/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
  Input: haystack = "hello", needle = "ll"
  Output: 2

Example 2:
  Input: haystack = "aaaaa", needle = "bba"
  Output: -1

Clarification:
  What should we return when needle is an empty string? This is a great question to ask during an interview.
*/

/*
  time
    O(n^2)
  space
    O(n + m)
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }

  let inx = -1;

  for (let i = 0; i < haystack.length; i++) {
    if (inx !== -1) {
      break;
    }

    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break;
        }
        if (j === needle.length - 1) {
          inx = i;
        }
      }
    }
  }

  return inx;
  // return haystack.indexOf(needle);
};

let cases = [
  { in: 'hello', in2: 'll', out: 2 },
  { in: 'aaaaa', in2: 'bba', out: -1 },
];

const tester = require('../tester');
tester.twoInput(cases, strStr);
