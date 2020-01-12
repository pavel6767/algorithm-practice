/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number?

largestPrimeFactor(2) should return 2.
largestPrimeFactor(3) should return 3.
largestPrimeFactor(5) should return 5.
largestPrimeFactor(7) should return 7.
largestPrimeFactor(13195) should return 29.
largestPrimeFactor(600851475143) should return 6857.

*/

function largestPrimeFactor(number) {
  //2*n
  let count = 1;
  let highestLow = 1;
  let current;

  while (count <= number / count) {
    // sqrt(n)
    current = number / count;
    if (current % 1 === 0) {
      if (isPrime(current)) {
        // sqrt(n)
        return current;
      } else {
        // sqrt(n)
        highestLow = isPrime(count) ? count : highestLow;
      }
    }
    count++;
  }

  return highestLow;
}

function isPrime(n) {
  if (n === 1 || n === 2) {
    return true;
  }

  let curr;
  for (let i = 2; i < Math.sqrt(n); i++) {
    curr = n / i;
    if (curr % 1 === 0) {
      return false;
    }
  }
  return true;
}

let testCases = {
  2: 2,
  3: 3,
  5: 5,
  7: 7,
  13195: 29,
  600851475143: 6857,
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

tester(testCases, largestPrimeFactor);
