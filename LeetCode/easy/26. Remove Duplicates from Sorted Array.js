/*

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i + 1, 1);
//       i--;
//     }
//   }
//   return nums;
// };

// var removeDuplicates = (nums) => nums.filter((el, inx, self) => el !== self[inx + 1]).length;

/*
t O(2n)
s O(1)
*/
var removeDuplicates = function(nums) {
  let j = 0,
      popCount=nums.length-1
  
  for(let i=1; i<nums.length; i++) {
      if(nums[i] !== nums[j]) {
          j++
          popCount--
          [nums[j],nums[i]] = [nums[i],nums[j]]
      } 
  }
  while(popCount>0) {
      nums.pop()
      popCount--
  }
  return nums.length
};

let cases = [
  { in: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], out: [0, 1, 2, 3, 4] },
  { in: [1,1,2], out: [1,2] },
];

const tester = require('../tester');
tester.oneInput(cases, removeDuplicates);