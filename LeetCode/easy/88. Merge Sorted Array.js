/*

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// o(n)
// var merge = function(nums1, m, nums2, n) {
//   if (m === 0) {
//     nums1.splice(0, 1, ...nums2);
//     return nums2;
//   }

//   let j = 0,
//     i = 0;
//   // debugger;
//   while (i <= m) {
//     if (nums1[i] >= nums2[j]) {
//       nums1.splice(i, 0, nums2[j]);
//       j++;
//     }
//     i++;
//   }

//   if (j <= n) {
//     nums1.splice(i, n - j + 0, ...nums2.slice(j));
//   }

//   nums1.splice(m + n, nums1.length - m);

//   return nums1;
// };

var merge = function(nums1, m, nums2, n) {
  let j = 0;
  for (let i = 0; i < m + n; i++) {
    if (nums1[i] >= nums2[j]) {
      nums1.splice(i, 0, nums2[j]);
      j++;
    }
  }

  // fill if any numbers left in nums2
  if (j < n) {
    nums1.splice(m + j, 0, ...nums2.slice(j));
  }
  // clean up all the trailing 0's
  nums1.splice(m + n, n);

  return nums1;
};

// const nums1 = [1, 2, 4, 5, 6, 0],
//   m = 5,
//   nums2 = [3],
//   n = 1;

const nums1 = [4, 0, 0, 0, 0, 0],
  m = 1,
  nums2 = [1, 2, 3, 5, 6],
  n = 5;

// const nums1 = [2, 0],
//   m = 1,
//   nums2 = [1],
//   n = 1;

// const nums1 = [0],
//   m = 0,
//   nums2 = [1],
//   n = 1;

// const nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;

// const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0],
//   m = 6,
//   nums2 = [1, 2, 2],
//   n = 3;
//[-1, 0, 0, 1, 2, 2, 3, 3, 3];

// const nums1 = [1, 0],
//   m = 1,
//   nums2 = [2],
//   n = 1;

console.log(merge(nums1, m, nums2, n));
