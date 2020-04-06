/*

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/* O((n^2)*log(n)) */
var groupAnagrams = function (strs) {
  let guide = {};
  let temp = '';
  for (let i = 0; i < strs.length; i++) {
    temp = strs[i].split('').sort();
    if (guide.hasOwnProperty(temp)) {
      guide[temp].push(strs[i]);
    } else {
      guide[temp] = [strs[i]];
    }
  }
  return Object.values(guide);
};

// var groupAnagrams = function (strs) {
//   let res = [];
//   let guide = {
//     indexes: {
//       '0': {
//         a: 1,
//         t: 1,
//         e: 1,
//       },
//     },
//     eval(str) {
//       let temp = {};
//       for (let i = 0; i < str.length; i++) {
//         if (!temp.hasOwnProperty(str[i])) {
//           temp[str[i]] = 1;
//         } else {
//           temp[str[i]] += 1;
//         }
//       }
//       //keys of guide against temp, see where it fits
//       let inx = guide.determineIndex(str, temp);
//     },
//     determineIndex(obj) {
//       let found = false
//       for (let inx in guide.indexes) {
//         for (let key in inx) {
//           if (!(obj.hasOwnProperty(key) && obj[key] === inx[key])) {
//             found = false
//             break;
//           }

//         }
//       }
// loop indexes
// for key in obj
// if match
//
//if no match
// return res.length
//   },
// };

//   for (let i = 0; i < strs.length; i++) {
//     //evaluate each string
//   }

//   return res;
// };

let cases = [
  {
    in: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    out: [['ate', 'eat', 'tea'], ['nat', 'tan'], ['bat']],
  },
];

function tester(cases, cb) {
  let current;
  for (let i = 0; i < cases.length; i++) {
    current = cb(cases[i].in);
    console.log(`\n${cases[i].in} ::: ${cases[i].out}`);
    console.log(
      JSON.stringify(cases[i].out) === JSON.stringify(current)
        ? 'pass'
        : `fail :: ${current}`,
    );
  }
}
tester(cases, groupAnagrams);
