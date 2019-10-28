/*
Count the number of prime numbers less than a non-negative number, n.

Example:

  Input: 10
  Output: 4
  Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let res = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      res++;
    }
  }
  return res;
};

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let input = 999983;
// let input = 499979;
console.log(countPrimes(input));
