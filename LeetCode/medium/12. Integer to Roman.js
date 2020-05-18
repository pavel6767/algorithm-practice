/*

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:
  Input: 3
  Output: "III"

Example 2:
  Input: 4
  Output: "IV"

Example 3:
  Input: 9
  Output: "IX"

Example 4:
  Input: 58
  Output: "LVIII"
  Explanation: L = 50, V = 5, III = 3.

Example 5:
  Input: 1994
  Output: "MCMXCIV"
  Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

/*
  time
    O(2n -> n)
  space
    O(n+log10n -> n)
*/

/**
 * @param {number} num
 * @return {string}
 */

/*
check each cypher and translate it
turn num to string

by each pow of 10, we have a base I, mid V

iterate
  determine pow of 10

  check num
  if 0
    continue
  if 1..3
    base.repeat(num)
  if 4
    base+mid
  if 9
    base+next
  if 5
    mid
  if 6..8
    mid+base.repeat(num-5)
*/
var intToRoman = function (num) {
  const map = [
    { base: 'I', mid: 'V' },
    { base: 'X', mid: 'L' },
    { base: 'C', mid: 'D' },
    { base: 'M', mid: '!' },
  ];

  let s = String(num);
  let res = '';

  for (let i = 0; i < s.length; i++) {
    let pow = s.length - i - 1;
    let curr = Number(s[i]);

    if (curr >= 1 && curr <= 3) {
      res += map[pow].base.repeat(curr);
    } else if (curr === 4) {
      res += `${map[pow].base}${map[pow].mid}`;
    } else if (curr === 5) {
      res += map[pow].mid;
    } else if (curr >= 6 && curr <= 8) {
      res += `${map[pow].mid}${map[pow].base.repeat(curr - 5)}`;
    } else if (curr === 9) {
      res += `${map[pow].base}${map[pow + 1].base}`;
    }
  }
  return res;
};
let cases = [
  { in: 3, out: 'III' },
  { in: 4, out: 'IV' },
  { in: 9, out: 'IX' },
  { in: 58, out: 'LVIII' },
  { in: 1994, out: 'MCMXCIV' },
];

const tester = require('../tester');
tester.oneInput(cases, intToRoman);
