/*

Given two arrays, write a function to compute their intersection.

Example 1:
  Input: nums1 = [1,2,2,1], nums2 = [2,2]
  Output: [2,2]

Example 2:
  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  Output: [4,9]

Note:

  Each element in the result should appear as many times as it shows in both arrays.
  The result can be in any order.

Follow up:

  What if the given array is already sorted? How would you optimize your algorithm?
  What if nums1's size is small compared to nums2's size? Which algorithm is better?
  What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?


*/

/*
  time O(n+m)
  space O(n)
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = {};
  let res = [];

  nums2.forEach((num) => {
    if (map.hasOwnProperty(num)) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  });

  for (let i = 0; i < nums1.length; i++) {
    if (map.hasOwnProperty(nums1[i])) {
      res.push(nums1[i]);
      map[nums1[i]]--;
      if (map[nums1[i]] === 0) {
        delete map[nums1[i]];
      }
    }
  }
  return res;
};

let cases = [
  { in: [1, 2, 2, 1], nums2: [2], out: [2] },
  { in: [1, 2, 2, 1], nums2: [2, 2], out: [2, 2] },
  { in: [4, 9, 5], nums2: [9, 4, 9, 8, 4], out: [4, 9] },
];

function tester(cases, cb) {
  let current;
  for (let i = 0; i < cases.length; i++) {
    current = cb(cases[i].in, cases[i].nums2);
    console.log(`\n${cases[i].in} ::: ${cases[i].out}`);
    console.log(
      JSON.stringify(cases[i].out) === JSON.stringify(current)
        ? 'pass'
        : `fail :: ${current}`,
    );
  }
}
tester(cases, intersect);
