/*

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
  Input: ["flower","flow","flight"]
  Output: "fl"

Example 2:
  Input: ["dog","racecar","car"]
  Output: ""
  Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.

*/

var longestCommonPrefix = function(strs) {
  let memo = '';
  let char;

  // base cases
  if (strs.length === 0) {
    return memo;
  }

  if (strs.length === 1) {
    return strs[0];
  }

  for (let i = 0; i < strs[0].length; i++) {
    //loop char of first word
    char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      //loop arr
      if (strs[j][i] !== char) {
        return memo;
      }
      if (j === strs.length - 1) {
        memo += char;
      }
    }
  }
  return memo;
};

let input = ['aca', 'cba'];

console.log(longestCommonPrefix(input));
