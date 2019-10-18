/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

var twoSum = function(nums, target) {
  let obj = {};
  let res = [];

  let curr,
    diff,
    i = 0;
  while (i < nums.length) {
    curr = nums[i];
    diff = target - curr;
  }
  // for (let i = 0; i < nums.length; i++) {
  //   curr = nums[i];
  //   diff = target - curr;
  //   if (nums.includes(diff)) {
  //     res.push(nums.indexOf(curr));

  //     res.push(nums.indexOf(diff));
  //     return res;
  //   }
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   if (obj.hasOwnProperty(nums[i])) {
  //     obj[nums[i]] = [obj[nums[i]], nums[i]];
  //   }
  //   obj[nums[i]] = i;
  // }
  // console.log(obj);
  // for (let key in obj) {
  //   if (obj.hasOwnProperty(target - key)) {
  //     res.push(obj[key]);
  //     res.push(obj[target - key]);
  //     break;
  //   }
  // }

  return res;
};

let arr = [3, 3],
  tar = 6;

// [0,1]

console.log(twoSum(arr, tar));
/*

table studio


*/
