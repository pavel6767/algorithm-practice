/*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

largestPalindromeProduct(2) should return 9009.
largestPalindromeProduct(3) should return 906609.

*/

function largestPalindromeProduct(n) {
  let first = Math.pow(10, n) - 1;
  let second = Math.pow(10, n) - 1;
  let current;
  // debugger;
  while (first !== 0 && second !== 0) {
    current = first * second;
    if (isPalindrome(current)) {
      return current;
    } else {
      second--;
      // if (first * (second - 1) > (first - 1) * second) {
      //   second--;
      // }
      // else {
      //   first--;
      // }
    }
  }

  return null;
}

function isPalindrome(n) {
  n = String(n);
  for (let i = 0; i < n.length / 2; i++) {
    if (n[i] !== n[n.length - i - 1]) {
      return false;
    }
  }
  return true;
}

let testCases = {
  2: 9009,
  3: 906609,
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

// tester(testCases, largestPalindromeProduct);

(function go() {
  let first = Math.pow(10, 2) - 1;
  let second = Math.pow(10, 2) - 1;
  let current;
  while (first !== 0 && second !== 0) {
    current = first * second;
    console.log('\nfirst :: ', first);
    console.log('second :: ', second);
    console.log('product :: ', current);
    second--;
    // if (first * (second - 1) > (first - 1) * second) {
    //     second--;
    //   }
    //   else {
    //     first--;
    //   }
  }
})();
