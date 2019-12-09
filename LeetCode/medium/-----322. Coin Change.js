/*

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

  Input: coins = [1, 2, 5], amount = 11
  Output: 3
  Explanation: 11 = 5 + 5 + 1

Example 2:

  Input: coins = [2], amount = 3
  Output: -1

Note:
You may assume that you have an infinite number of each kind of coin.

*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
  coins = coins.sort((a, b) => a - b);

  let remainder = amount;
  let count = 0;
  let i = coins.length - 1;

  debugger;
  while (remainder !== 0) {
    if (remainder - coins[i] >= 0) {
      remainder -= coins[i];
      count++;
    } else {
      i--;
      if (i === -1) {
        return i;
      }
    }
  }
  return count;
};

let coins = [186, 419, 83, 408],
  amount = 6249; // 20
console.log(coinChange(coins, amount));
