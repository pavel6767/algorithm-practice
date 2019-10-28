/*

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

  Input: 121
  Output: true

Example 2:

  Input: -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

  Input: 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Follow up:
  Coud you solve it without converting the integer to a string?

*/

var isPalindrome = function(x) {
  const original = x;

  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  } else if (x === 0) {
    return true;
  }

  let pow = Math.floor(Math.log10(x));
  let curr;
  let result = 0;
  while (pow > -1) {
    curr = x % 10;
    result += curr * Math.pow(10, pow);
    x = (x - curr) / 10;
    pow--;
  }
  return result === original;
};

let input = 0;
console.log(isPalindrome(input));
