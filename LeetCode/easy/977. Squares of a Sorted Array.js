/*

Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
/*
    >> sorted
    << sorted
    
    use stack
    iter arr
        if num < 0
            add square to stack
        if n>0
            check n*n vs top of stack
            
[-4,-1,0,3,10]
s[16]

s[16,1]

s[16,1]
res[0]

s[16,9]
res[0,1]

s[16] n**2
res[0,1,9]
*/
var sortedSquares = function(arr) {
  const res = []
  const stack = []
  
  for(let n of arr) {
      if(n<0) {
          stack.push(n*n)
      } else if (n === 0) {
          res.push(0)
      } else if (n>0) {
          if(stack.length > 0) {
              let temp = n*n
              if(temp < stack[stack.length-1]) {
                  res.push(temp)
              } else {
                  res.push(stack.pop())
                  while(stack.length>0 && stack[stack.length-1] < temp) {
                      res.push(stack.pop())
                  }
                  stack.push(temp)
              }
          } else {
              res.push(n*n)
          }
      }
  }
  
  while (stack.length > 0) {
      res.push(stack.pop())
  }
  
  return res
};

let cases = [
  { in: [-4,-1,0,3,10], out: [0,1,9,16,100] },
  { in: [-7,-3,2,3,11], out: [4,9,9,49,121] },
];

const tester = require('../tester');
tester.oneInput(cases, sortedSquares);
