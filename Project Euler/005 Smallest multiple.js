/*

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

smallestMult(5) should return 60.
smallestMult(7) should return 420.
smallestMult(10) should return 2520.
smallestMult(13) should return 360360.
smallestMult(20) should return 232792560.

*/

function smallestMult(n) {
  let res = 1;
  let track = {};

  for (let curr = 2; curr <= n; curr++) {
    if (!track.hasOwnProperty(curr) && noDivisors(track, curr)) {
      track[curr] = true;
      res *= curr;
    }
  }
  console.log(Object.keys(track));
  return res;
}

function noDivisors(track, curr) {
  for (let key in track) {
    if (curr % key === 0) {
      return false;
    }
  }
  return true;
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
