function measureHourGlass(arr) {
  let highestSum = -Infinity;
  let tempSum = 0;

  for (let row = 0; row < arr.length - 2; row++) {
    for (let col = 0; col < arr[0].length - 2; col++) {
      tempSum += arr[row][col];
      tempSum += arr[row][col + 1];
      tempSum += arr[row][col + 2];
      tempSum += arr[row + 1][col + 1];
      tempSum += arr[row + 2][col];
      tempSum += arr[row + 2][col + 1];
      tempSum += arr[row + 2][col + 2];

      if (tempSum > highestSum) {
        highestSum = tempSum;
      }
      tempSum = 0;
    }
  }
  console.log(highestSum);
  return highestSum;
}

// let arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];
// 19

let arr = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7],
];
// -19

console.log(measureHourGlass(arr));
