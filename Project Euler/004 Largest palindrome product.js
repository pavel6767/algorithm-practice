/*

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers.

largestPalindromeProduct(2) should return 9009.
largestPalindromeProduct(3) should return 906609.

*/

function largestPalindromeProduct(n) {
  // let first = Math.pow(10, n) - 1;
  // let second = Math.pow(10, n) - 1;
  let current;
  // debugger;
  // for (let second = first; second > first / 10; second--) {
  //   current = first * second;
  //   console.log(current);
  //   if (isPalindrome(current)) {
  //     return current;
  //   } else {
  //     for (let f = first - 1; f >= second; f--) {
  //       console.log(current);
  //       current = f * second;
  //       if (isPalindrome(current)) {
  //         return current;
  //       }
  //     }
  //   }
  // }

  let max = 0;
  for (let first = Math.pow(10, n) - 1; first > Math.pow(10, n - 1); first--) {
    for (let second = first; second > Math.pow(10, n - 1); second--) {
      current = first * second;
      if (isPalindrome(current) && current > max) {
        max = current;
      }
    }
  }
  return max;
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

tester(testCases, largestPalindromeProduct);
