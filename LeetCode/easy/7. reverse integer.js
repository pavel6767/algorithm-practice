/*
  Given a 32-bit signed integer, reverse digits of an integer.

  Input: 123
  Output: 321

*/

var reverse = function (x) {
  const negative = x < 0 ? -1 : 1;
  let s = Math.abs(x).toString().split('');
  for (let i = 0; i < s.length / 2; i++) {
    [[s[i]], [s[s.length - i - 1]]] = [s[s.length - i - 1], s[i]];
  }

  if (Number(s.join('')) >= Math.pow(2, 31)) {
    return 0;
  }

  return Number(s.join('')) * negative;
};

let cases = [
  { in: 123, out: 321 },
  { in: 1534236469, out: 0 },
];

const tester = require('../tester');
tester(cases, reverse);
