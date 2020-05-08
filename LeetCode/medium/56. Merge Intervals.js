/*

Given a collection of intervals, merge all overlapping intervals.

Example 1:
  Input: [[1,3],[2,6],[8,10],[15,18]]
  Output: [[1,6],[8,10],[15,18]]
  Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
  Input: [[1,4],[4,5]]
  Output: [[1,5]]
  Explanation: Intervals [1,4] and [4,5] are considered overlapping.
  NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let prev = res[res.length - 1];
    if (prev[1] >= intervals[i][0]) {
      if (prev[1] < intervals[i][1]) {
        res[res.length - 1] = [prev[0], intervals[i][1]];
      }
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
  // return intervals
  //   .sort((a, b) => a[0] - b[0])
  //   .reduce((acc, curr) => {
  //     if (acc.length === 0) {
  //       return [curr];
  //     }

  //     let prev = acc[acc.length - 1];
  //     if (prev[1] >= curr[0]) {
  //       if (prev[1] < curr[1]) {
  //         acc[acc.length - 1] = [prev[0], curr[1]];
  //       }
  //       return acc;
  //     } else {
  //       return [...acc, curr];
  //     }
  //   }, []);
};

let cases = [
  {
    in: [
      [1, 3],
      [8, 10],
      [15, 18],
      [2, 6],
    ],
    out: [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
  },
  {
    in: [
      [1, 4],
      [4, 5],
    ],
    out: [[1, 5]],
  },
  {
    in: [
      [1, 4],
      [1, 4],
    ],
    out: [[1, 4]],
  },
];

const tester = require('../tester');
tester(cases, merge);
