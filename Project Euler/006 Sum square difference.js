/*

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

*/

function sumSquareDifference(n) {
  let sqSum = 0;
  let sumSq = 0;

  for (let count = 1; count <= n; count++) {
    sqSum += Math.pow(count, 2);
    sumSq += count;
  }
  sumSq *= sumSq;
  return sumSq - sqSum;
}

let testCases = {
  10: 2640,
  20: 41230,
  100: 25164150,
};

function tester(testCases, call) {
  let current;
  for (let key in testCases) {
    current = call(key);
    console.log(`\n${key} ::: ${testCases[key]}`);
    if (testCases[key] === current) {
      console.log('pass');
    } else {
      console.error('fail :: ', current);
    }
  }
}

tester(testCases, sumSquareDifference);
