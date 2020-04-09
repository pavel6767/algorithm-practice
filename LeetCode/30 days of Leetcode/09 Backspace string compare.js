/*

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:

  Input: S = "ab#c", T = "ad#c"
  Output: true
  Explanation: Both S and T become "ac".

Example 2:

  Input: S = "ab##", T = "c#d#"
  Output: true
  Explanation: Both S and T become "".

Example 3:

  Input: S = "a##c", T = "#a#c"
  Output: true
  Explanation: Both S and T become "c".

Example 4:

  Input: S = "a#c", T = "b"
  Output: false
  Explanation: S becomes "c" while T becomes "b".

Note:
  1 <= S.length <= 200
  1 <= T.length <= 200
  S and T only contain lowercase letters and '#' characters.

Follow up:
Can you solve it in O(N) time and O(1) space?

*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  return helper(S) === helper(T);
};

function helper(word) {
  let amount = 0;
  let arr = [];
  let i = word.length - 1;

  while (i >= 0) {
    if (word[i] === '#') {
      amount++;
    } else {
      if (amount > 0) {
        amount--;
      } else {
        arr.push(word[i]);
      }
    }
    i--;
  }
  return arr.join('');
}

let cases = [
  {
    in: 'ab##',
    in2: 'c#d#',
    out: true,
  },
  {
    in: 'ab##',
    in2: 'c#d#',
    out: true,
  },
  {
    in: 'a##c',
    in2: '#a#c',
    out: true,
  },
  {
    in: 'a#c',
    in2: 'b',
    out: false,
  },
];

function tester(cases, cb) {
  let current;
  for (let i = 0; i < cases.length; i++) {
    current = cb(cases[i].in, cases[i].in2);
    console.log(`\n${cases[i].in} ::: ${cases[i].out}`);
    console.log(
      JSON.stringify(cases[i].out) === JSON.stringify(current)
        ? 'pass'
        : `fail :: ${current}`,
    );
  }
}
tester(cases, backspaceCompare);
