/*

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

*/

// function sym(args) {
//   let aList = [...arguments];
//   let result = aList.reduce((acc, curr) => helper(acc, curr));

//   return result;
// }

// function helper(arr1, arr2) {
//   let result = new Set();

//   let set1 = new Set(arr1);
//   let set2 = new Set(arr2);

//   for (let val1 of set1.values()) {
//     for (let val2 of set2.values()) {
//       if (!set2.has(val1)) {
//         result.add(val1);
//       }
//       if (!set1.has(val2)) {
//         result.add(val2);
//       }
//     }
//   }
//   return Array.from(result);
// }

// console.log(sym([1, 2, 3], [5, 2, 1, 4]) === [3, 4, 5]);
// console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));

/*

Sentence Reverse

You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

Example:

input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]

Constraints:

    [time limit] 5000ms

    [input] array.character arr
        0 ≤ arr.length ≤ 100

    [output] array.character

*/

function reverseWords(arr) {
  const aux = [];
  const res = [];
  let temp = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== ' ') {
      temp += arr[i];
      if (i === arr.length - 1) {
        aux.push(temp);
      }
    } else {
      if (temp.length !== 0) {
        aux.push(temp);
        temp = '';
      }
    }
  }

  for (let i = aux.length - 1; i >= 0; i--) {
    res.push(...aux[i].split(''));
    if (i !== 0) res.push(' ');
  }
  return res;
}

const input = [
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
  ' ',
  'm',
  'a',
  'k',
  'e',
  's',
  ' ',
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e',
];

const output = [
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e',
  ' ',
  'm',
  'a',
  'k',
  'e',
  's',
  ' ',
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
];

console.log(reverseWords(input, output));
