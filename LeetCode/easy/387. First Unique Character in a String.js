/*

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.


*/

/*
  time O(n^2)
  space O(n)
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // const map = {};

  // for (let i = 0; i < s.length; i++) {
  //   if (!map.hasOwnProperty(s[i])) {
  //     map[s[i]] = {
  //       inx: [i],
  //       num: 1,
  //     };
  //   } else {
  //     map[s[i]].inx.push(i);
  //     map[s[i]].num++;
  //   }
  // }

  // let lowestUnique = Infinity;
  // for (let char in map) {
  //   if (map[char].num === 1) {
  //     if (map[char].inx[0] < lowestUnique) {
  //       lowestUnique = map[char].inx[0];
  //     }
  //   }
  // }
  // return lowestUnique === Infinity ? -1 : lowestUnique;

  let h = {}
  let stack = []
  let earliestUnique = -1
  for(let i = s.length-1; i>=0; i--) {
      if(!h.hasOwnProperty(s[i])) {
          h[s[i]] = i
          earliestUnique = i
          stack.push(i)
      } else {
          // if(s[earliestUnique] === s[i]) earliestUnique = -1 
          if(stack.length > 0 && stack[stack.length-1] === s[i]) {
            stack.pop()
          }
      }
  }
  return stack.length === 0 ? -1 : stack[stack.length-1]
};

let cases = [
  { in: 'leetcode', out: 0 },
  { in: 'loveleetcode', out: 2 },
  { in: 'dddccdbba', out: 8 },
  { in: 'z', out: 0 },
  { in: '', out: -1 },
];

const tester = require('../tester');
tester.oneInput(cases, firstUniqChar);
