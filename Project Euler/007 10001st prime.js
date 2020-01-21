/*

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?

nthPrime(6) should return 13.
nthPrime(10) should return 29.
nthPrime(100) should return 541.
nthPrime(1000) should return 7919.
nthPrime(10001) should return 104743.

*/

// O(n^2)
function nthPrime(n) {
  let primeCount = 1;
  let currentNumber = 2;
  let latestPrime = 2;

  while (primeCount <= n) {
    if (isPrime(currentNumber)) {
      primeCount++;
      latestPrime = currentNumber;
    }
    currentNumber++;
  }

  return latestPrime;
}

function isPrime(n) {
  if (n >= 1 && n <= 3) {
    return true;
  }

  for (let count = 2; count <= Math.sqrt(n); count++) {
    if (n % count === 0) {
      return false;
    }
  }
  return true;
}

let testCases = {
  6: 13,
  10: 29,
  100: 541,
  1000: 7919,
  10001: 104743,
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

tester(testCases, nthPrime);
