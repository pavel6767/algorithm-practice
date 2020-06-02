/*

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

Examples:

s = "3[a]2[bc]", return "aaabcbc".
s = "3[a2[c]]", return "accaccacc".
s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

*/

/**
 * @param {string} s
 * @return {string}
 */

/*

2[b4[F]c]
  ns 2
  ss b
2[b FFFFc]
same length
  ns 2
  ss bFFFF
0
  num []
  str []
  temp '3'
  res ''
1
  num [3]
  str []
  temp ''
  res ''
2
  num [3]
  str []
  temp 'a'
  res ''
3
  num []
  str []
  temp ''
  res 'aaa'
4
  num []
  str []
  temp '2'
  res ''



iterate s
  num
    if temp[0] not number
      push temp to str[]
      clear temp
    add to temp
  [
    add temp to num stack
    clear temp
  ]
    if temp not empty
      add temp to str stack
      clear temp
    temp = exec top of both stacks
    if str[] not empty
      str[last] += temp
    else
      res +=temp
    clear temp

  char
    add to temp
*/
// var decodeString = function (s) {
//   const numStack = [];
//   const sStack = [];
//   let temp = '';
//   let res = '';

//   for (let i = 0; i < s.length; i++) {
//     // if (i === 8) debugger;
//     // console.log('\n');
//     // console.log(JSON.stringify(numStack));
//     // console.log(JSON.stringify(sStack));
//     if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
//       if (temp.length !== 0 && isNaN(temp)) {
//         if (sStack.length !== 0) {
//           sStack[sStack.length - 1] += temp;
//         } else {
//           sStack.push(temp);
//         }
//         temp = '';
//       }
//       temp += s[i];
//     } else if (s[i] === '[') {
//       numStack.push(Number(temp));
//       temp = '';
//     } else if (s[i] === ']') {
//       if (temp.length !== 0) {
//         if (sStack.length === numStack.length - 1) {
//           sStack[sStack.length - 1] += temp;
//         } else {
//           sStack.push(temp);
//         }
//         temp = '';
//       }

//       let n = numStack.pop();
//       temp = sStack.pop();
//       temp = temp.repeat(n);

//       if (numStack.length !== 0) {
//         if (sStack.length === numStack.length) {
//           sStack[sStack.length - 1] += temp;
//         } else {
//           sStack.push(temp);
//         }
//       } else {
//         res += temp;
//       }
//       temp = '';
//     } else {
//       temp += s[i];
//     }
//   }

//   if (temp.length !== 0) {
//     res += temp;
//     temp = '';
//   }
//   return res;
// };
/*
10[z]

0
numStack [10]
sStack []
res

2
numStack [10]
sStack ['']
res

3
numStack [10]
sStack ['']
res z

4
numStack [10]
sStack ['']
res z
temp ''
count 10
temp zzzzzzzzzz
res zzzzzzzzzz

*/
// var decodeString = function (s) {
//   const numStack = [];
//   const sStack = [];
//   let res = '';
//   let i = 0;
//   while (i < s.length) {
//     if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
//       let count = 0;
//       while (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
//         count = 10 * count + Number(s[i]);
//         i++;
//       }
//       numStack.push(count);
//     } else if (s[i] === '[') {
//       sStack.push(res);
//       res = '';
//       i++;
//     } else if (s[i] === ']') {
//       let temp = sStack.pop();
//       let count = numStack.pop();
//       for (let i = 0; i < count; i++) {
//         temp += res;
//       }
//       res = temp;
//       i++;
//     } else {
//       res += s[i];
//       i++;
//     }
//   }

//   return res;
// };

/*
  str -> str
  decoded
  num[char] char*num
  4[z] zzzz
  4[z2[u]] zuuzuuzuuzuu


*/
var decodeString = function (s) {
  let res = '';
  let multiplier = 1;

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      let n = 0;
      while (!isNaN(s[i])) {
        n = 10 * n + Number(s[i]);
        i++;
      }
      i--;
      multiplier = n;
    } else if (s[i] === '[') {
      const temp = decodeString(s.slice(i + 1));
      res += temp.repeat(multiplier);
      multiplier = 1;
      i += temp.length + 1;
    } else if (s[i] === ']') {
      return res;
    } else {
      res += s[i];
    }
  }
  return res;
};

/*
  3[a2[c]]

  0
  n[3]
  s[]
  res ''
  1
  n[3]
  s['']
  res ''
  2
  n[3]
  s['']
  res 'a'
  3
  n[3, 2]
  s['']
  res 'a'
  4
  n[3, 2]
  s['','a']
  res ''
  5
  n[3, 2]
  s['','a']
  res 'c'
  6
  n[3, 2]
  s['','a']
  res 'c'
*/
var decodeString = function (s) {
  const numStack = [];
  const sStack = [];
  let res = '';
  let i = 0;

  while (i < s.length) {
    if (!isNaN(s[i])) {
      let n = 0;
      while (!isNaN(s[i])) {
        n = 10 * n + Number(s[i]);
        i++;
      }
      numStack.push(n);
    } else if (s[i] === '[') {
      sStack.push(res);
      res = '';
      i++;
    } else if (s[i] === ']') {
      let n = numStack.pop();
      let temp = sStack.pop();
      temp += res.repeat(n);
      res = temp;
      i++;
    } else {
      res += s[i];
      i++;
    }
  }
  return res;
};
let cases = [
  // {
  //   in: '3[a]2[bc]',
  //   out: 'aaabcbc',
  // },
  // {
  //   in: '3[a2[c]]',
  //   out: 'accaccacc',
  // },
  // {
  //   in: '2[abc]3[cd]ef',
  //   out: 'abcabccdcdcdef',
  // },
  // {
  //   in: '3[a]2[b4[F]c]',
  //   out: 'aaabFFFFcbFFFFc',
  // },
  // {
  //   in: '2[b4[F]c]',
  //   out: 'bFFFFcbFFFFc',
  // },
  // {
  //   in: '3[z]2[2[y]pq4[2[jk]e1[f]]]ef',
  //   out: 'zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef',
  // },
  {
    in: '4[2[jk]e1[f]]',
    out: 'jkjkefjkjkefjkjkefjkjkef',
  },
  // {
  //   in: '10[z]',
  //   out: 'zzzzzzzzzz',
  // },
];

const tester = require('../tester');
tester.oneInput(cases, decodeString);
