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
var removeDuplicates = function (s, k) {
  //3n+k
  let occur = 0;

  const stack = [];
  const peek = () => stack[stack.length - 1];

  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0) {
      stack.push(s[i]);
      occur++;
    } else {
      if (occur === k) {
        while (occur > 0) {
          stack.pop();
          occur--;
        }

        i--;
        occur = 0;

        if (stack.length === 0) continue;

        occur++;
        let temp = [stack.pop()];
        while (temp[0] === peek()) {
          temp.push(stack.pop());
          occur++;
        }
        while (temp.length > 0) {
          stack.push(temp.pop());
        }
      } else {
        if (s[i] === peek()) {
          occur++;
        } else {
          occur = 1;
        }

        stack.push(s[i]);
      }
    }
  }

  if (occur === k) {
    while (occur > 0) {
      stack.pop();
      occur--;
    }
  }

  let res = [];
  while (stack.length > 0) {
    res.push(stack.pop());
  }
  return res.reverse().join('');
};

module.exports = removeDuplicates;
