/*

Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.

Example 1:
  Input: s = "abcd", k = 2
  Output: "abcd"
  Explanation: There's nothing to delete.

Example 2:
  Input: s = "deeedbbcccbdaa", k = 3
  Output: "aa"
  Explanation:
  First delete "eee" and "ccc", get "ddbbbdaa"
  Then delete "bbb", get "dddaa"
  Finally delete "ddd", get "aa"

Example 3:
  Input: s = "pbbcggttciiippooaais", k = 2
  Output: "ps"

*/

/*
  given string: s
  return string: res

  iterate str and remove k adjacent equal chars
    consider adjacency after a removal

  let rep = 1
  iterate s from top to 0
    curr
    if stack is empty
      push curr

    if occur === k
      pop stack
      reset k
      re-eval curr inx in next iteration (i--)
    else
      check if peek === curr
        set occur appropriately
      push stack
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/*
t
  O(4n+k -> n+k -> n)
s
  O(3n+k -> n+k -> n)
 */

const removeDuplicates = function(s, k) {
  const stack = []
  const peek = () => stack[stack.length-1]

  for(let char of s) {
    if(!stack.length) {
      stack.push([char,1])
    } else {
      if(char === peek()[0]) {
        stack[stack.length-1][1]++
      } else {
        stack.push([char,1])
      }
      if (peek()[1] === k) stack.pop()
    }
  }
  
  if (stack.length && peek()[1] === k) stack.pop()

  return stack.reduce((acc, curr) => acc+curr[0].repeat(curr[1]), "")
};

const cases = [
  { in: 'abcd', in2: 2, out: 'abcd' },
  { in: 'deeedbbcccbdaa', in2: 3, out: 'aa' },
  { in: 'pbbcggttciiippooaais', in2: 2, out: 'ps' },
  { in: 'nnwssswwnvbnnnbbqhhbbbhmmmlllm', in2: 3, out: 'vqm' },
  { in: 'aaaaaaa', in2: 3, out: 'a' },
];

const tester = require('../tester');
tester.twoInput(cases, removeDuplicates);

module.exports = removeDuplicates