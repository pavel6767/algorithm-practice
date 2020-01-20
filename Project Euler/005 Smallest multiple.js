/*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

smallestMult(5) should return 60.
smallestMult(7) should return 420.
smallestMult(10) should return 2520.
smallestMult(13) should return 360360.
smallestMult(20) should return 232792560.

*/
// O(n^2)
function smallestMult(n) {
  let arr = [];
  let temp;
  for (let curr = 2; curr <= n; curr++) {
    temp = curr;
    for (let i = 0; i < arr.length; i++) {
      temp = temp % arr[i] === 0 ? temp / arr[i] : temp;
    }
    arr.push(temp);
  }
  let res = arr.reduce((prev, curr) => prev * curr, 1);
  return res;
}

let testCases = {
  5: 60,
  7: 420,
  10: 2520,
  13: 360360,
  20: 232792560,
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

tester(testCases, smallestMult);
