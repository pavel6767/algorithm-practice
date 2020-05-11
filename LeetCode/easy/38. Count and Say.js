/*

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.  1
2.  11
3.  21
4.  1211
5.  111221
6.  312211
7.  13112221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.

Example 1:
  Input: 1
  Output: "1"
  Explanation: This is the base case.

Example 2:
  Input: 4
  Output: "1211"
  Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which means frequency = 1 and value = 2, the same way "1" is read as "11", so the answer is the concatenation of "12" and "11" which is "1211".

*/

/**
 * @param {number} n
 * @return {string}
 */

/*
  Iterative
*/

// var countAndSay = function(n) {
//   if (n <= 0) {
//     return null;
//   }

//   let count = 1;
//   let current = 1;

//   while (count < n) {
//     current = helper(current);
//     count++;
//   }
//   return current.toString();
// };

/*
  Recursive
*/

// var countAndSay = function(n, current = 1) {
//   return n === 1 ? current : countAndSay(n - 1, helper(current));
// };

// function helper(n) {
//   let str = n.toString();
//   let result = '';
//   let tempCount = 1;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[i + 1]) {
//       result += `${tempCount}${str[i]}`;
//       tempCount = 1;
//     } else {
//       tempCount++;
//     }
//   }
//   return result;
// }

var countAndSay = function (n) {
  if (n === 1) return '1';

  return helper('1', n);
};

function helper(s, count) {
  if (count === 1) {
    return s;
  }

  let res = '';
  let temp = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      temp++;
    } else {
      res += `${temp}${s[i]}`;
      temp = 1;
    }
  }

  return helper(res, count - 1);
}

let cases = [
  { in: 1, out: '1' },
  { in: 4, out: '1211' },
  { in: 5, out: '111221' },
  { in: 6, out: '312211' },
];

const tester = require('../tester');
tester.oneInput(cases, countAndSay);
