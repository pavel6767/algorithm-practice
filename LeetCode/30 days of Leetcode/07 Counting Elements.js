/*

Given an integer array arr, count element x such that x + 1 is also in arr.

If there're duplicates in arr, count them seperately.



Example 1:
  Input: arr = [1,2,3]
  Output: 2
  Explanation: 1 and 2 are counted cause 2 and 3 are in arr.

Example 2:
  Input: arr = [1,1,3,3,5,5,7,7]
  Output: 0
  Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.

Example 3:
  Input: arr = [1,3,2,3,5,0]
  Output: 3
  Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.

Example 4:
  Input: arr = [1,1,2,2]
  Output: 2
  Explanation: Two 1s are counted cause 2 is in arr.

Constraints:

1 <= arr.length <= 1000
0 <= arr[i] <= 1000

*/

/**
 * @param {number[]} arr
 * @return {number}
 */

/* O(n) */
var countElements = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  let sum = 0;
  for (key in obj) {
    if (obj.hasOwnProperty(Number(key) + 1)) {
      sum += obj[Number(key)];
    }
  }
  return sum;
};

let cases = [
  {
    in: [1, 2, 3],
    out: 2,
  },
  {
    in: [1, 1, 3, 3, 5, 5, 7, 7],
    out: 0,
  },
  {
    in: [1, 3, 2, 3, 5, 0],
    out: 3,
  },
  {
    in: [1, 1, 2, 2],
    out: 2,
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
tester(cases, countElements);