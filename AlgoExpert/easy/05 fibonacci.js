/*

get nth fibonacci number

input: 6
out: 5
0,1,1,2,3,5,8,13,21,34

*/

function getNthFib(n) {
  if (n == 1) {
    return 0;
  } else if (n <= 0) {
    return 'invalid input :(';
  }

  let count = 3;
  let curr = 1,
    prev = 1,
    newVal = 0;
  while (count < n) {
    newVal = curr + prev;
    prev = curr;
    curr = newVal;
    count++;
  }
  return curr;
}

const input = 5;

console.log(getNthFib(input));
