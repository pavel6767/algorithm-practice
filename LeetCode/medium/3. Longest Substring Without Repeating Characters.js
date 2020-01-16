/*

Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
// naive
// var lengthOfLongestSubstring = function(s) {
//   let set = new Set();
//   let max = 0;
//   for (let i = 0; i < s.length; i++) {
//     set.add(s[i]);
//     for (let j = i + 1; j < s.length; j++) {
//       if (!set.has(s[j])) {
//         set.add(s[j]);
//       } else {
//         break;
//       }
//     }
//     if (set.size > max) {
//       max = set.size;
//     }
//     set.clear();
//   }
//   return max;
// };

var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let max = 0;
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) >= left) {
      left = 1 + map.get(s[i]);
    }
    map.set(s[i], i);

    if (1 + i - left > max) {
      max = 1 + i - left;
    }
  }
  return max;
};

// let input = 'abcdacebou';
// let input = 'abcabcbb';
let input = 'abba';

console.log(lengthOfLongestSubstring(input));
