/*

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?


*/

/*
  time O(n^2)
  space O(n)
*/

/**
 * @param {string} s
 * @return {number}
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let map = {};
  for (let i = 0; i < t.length; i++) {
    if (!map.hasOwnProperty(t[i])) {
      map[t[i]] = 1;
    } else {
      map[t[i]]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.hasOwnProperty(s[i])) {
      map[s[i]]--;
      if (map[s[i]] === 0) {
        delete map[s[i]];
      }
    }
  }
  return Object.keys(map) === 0;
};

let cases = [
  { in: 'anagram', in2: 'nagaram', out: true },
  { in: 'rat', in2: 'car', out: false },
];

const tester = require('../tester');
tester.twoInput(cases, isAnagram);
