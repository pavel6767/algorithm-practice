/*

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.



Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
*/

/**
 * @param {string[]} A
 * @return {string[]}
 */

/*
  space 3n
  n*m
  Input: ["bella","label","roller"]
  Output: ["e","l","l"]

  looking for common char in all elem, && track occur
  need to consider only first elem
    what's len diff bet ele
    same?
    if diff
      maybe eval shortest str
  map first ele for char occur
    {char: numOccur}

  look rest of list and check
    keep char and maxOccur in common as iterate
    wordMap{char: occur}
    check word vs map
      if char is in map
        increment wordMap occur
  return char*occur as list
*/

var commonChars = function (A) {
  let map = {};
  // {char: int: inx, int: count, int: maxCount}
  for (let i in A[0]) {
    let char = A[0][i];
    if (map.hasOwnProperty(char)) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (let i = 1; i < A.length; i++) {
    let tempMap = {};
    for (let j in A[i]) {
      let char = A[i][j];
      if (map.hasOwnProperty(char)) {
        if (tempMap.hasOwnProperty(char)) {
          if (tempMap[char] < map[char]) tempMap[char]++;
        } else {
          tempMap[char] = 1;
        }
      }
    }
    map = tempMap;
  }

  let res = [];
  for (let key in map) {
    let i = 1;
    while (i <= map[key]) {
      res.push(key);
      i++;
    }
    i = 1;
  }
  return res;
};

let cases = [
  { in: ['bella', 'label', 'roller'], out: ['e', 'l', 'l'] },
  { in: ['cool', 'lock', 'cook'], out: ['c', 'o'] },
];

const tester = require('../tester');
tester.oneInput(cases, commonChars);
