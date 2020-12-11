/*
Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Example 1:
Input: nums = [1,5,11,5]
  Output: true
  Explanation: The array can be partitioned as [1, 5, 5] and [11].

  Example 2:
Input: nums = [1,2,3,5]
  Output: false
  Explanation: The array cannot be partitioned into equal sum subsets.
 
Constraints:
  1 <= nums.length <= 200
  1 <= nums[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*  
    1 1 2 2
    0 0 2  0


    
    sort arr
    iter arr (l, r)
        subtract till arr[r] === 0
        if arr[r] < 0
            false
    return true
*/
// var canPartition = function(nums) {
//   const arr = [...nums].sort((a,b) => a-b)
//   let l = 0, r = arr.length-1
//   while(l < r) {
//     arr[r] -= arr[l]
//     arr[l] = 0
//     if(arr[r] < 0) {
//       arr[r-1] += arr[r--]
//     }
//     if(arr[r] === 0) r--
//     l++
//   }
//   return arr[r] === 0
// };

const canPartition = (nums) => {
  const sum = nums.reduce((sum, currNum) => sum += currNum, 0);
  
  if (sum % 2 !== 0) return false;
  
  const target = sum / 2;
  const cache = new Array(target + 1).fill(false);
  cache[0] = true;
  
  for (const num of nums) {
      if (cache[target - num]) return true;
      
      for (let i = target; i >= num; i--) {
          cache[i] = cache[i - num];
      }
  }
  
  return false;
}

const cases = [
  {
    in: [1,3,4,4],
    out: false,
  },
  {
    in: [1,5,11,5],
    out: true,
  },
  {
    in: [1,2,3,5],
    out: false,
  },
  {
    in: [3,3,3,4,5],
    out: true,
  },
  {
    in: [2,2,1,1],
    out: true,
  },
]

const tester = require('../tester').oneInput;
tester(cases, canPartition);