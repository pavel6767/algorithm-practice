/*

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8

*/

function rowSumOddNumbers(n) {
  if (n === 1) {
    return 1;
  }

  let sum = 0;
  let left = 1,
    right = 1;

  let lSkip = 0;
  let rSkip = 0;

  for (let count = 1; count <= n; count++) {
    lSkip += 2 * (count - 1);
    rSkip += 2 * count;
  }
  left += lSkip;
  right += rSkip;

  for (let po = left; po < right; po += 2) {
    sum += po;
  }
  return sum;
}

const input = 4;

console.log(rowSumOddNumbers(input));
