/*
  Given a 32-bit signed integer, reverse digits of an integer.

  Input: 123
  Output: 321

*/

var reverse = function(x) {
  let negative = x < 0 ? -1 : 1;
  let arr = String(Math.abs(x)).split('');

  let temp;

  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }

  let res = Number(arr.join(''));

  if (res >= Math.pow(2, 31)) {
    return 0;
  }
  return res * negative;
};

let input = 1534236469;
console.log(reverse(input));
