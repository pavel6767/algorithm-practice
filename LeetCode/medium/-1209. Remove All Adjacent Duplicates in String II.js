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

  iterate str backwards and remove k adjacent equal chars
    consider adjacency after a removal

  let rep = 1
  iterate s from top to 0
    curr
    if stack is empty
      push curr
    match with top of stack
      rep++
      push curr
    no match
      how deep repetition goes
      remove this depth from stack
      reset rep accordingly

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  let rep = 0;
  const stack = [];

  const peek = () => stack[stack.length - 1];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
      rep++;
    }

    // if same
    // check if rep = k-1
    // pop
    else {
      if (rep === k) {
        while (rep > 0) {
          stack.pop();
          rep--;
        }

        i--;
        rep = 0;

        if (stack.length === 0) continue;

        rep++;
        let temp = [stack.pop()];
        while (temp[0] === peek()) {
          temp.push(stack.pop());
          rep++;
        }
        while (temp.length > 0) {
          stack.push(temp.pop());
        }
      } else {
        stack.push(s[i]);
        rep = 1;
      }
    }
  }

  if (rep === k) {
    while (rep > 0) {
      stack.pop();
      rep--;
    }
  }

  let res = [];
  while (stack.length > 0) {
    res.push(stack.pop());
  }
  return res.reverse().join('');
};

let cases = [
  { in: 'abcd', in2: 2, out: 'abcd' },
  { in: 'deeedbbcccbdaa', in2: 3, out: 'aa' },
  { in: 'pbbcggttciiippooaais', in2: 2, out: 'ps' },
  { in: 'nnwssswwnvbnnnbbqhhbbbhmmmlllm', in2: 3, out: 'vqh' },
];

const tester = require('../tester');
tester.twoInput(cases, removeDuplicates);
