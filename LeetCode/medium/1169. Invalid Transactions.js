/*

A transaction is possibly invalid if:

the amount exceeds $1000, or;
if it occurs within (and including) 60 minutes of another transaction with the same name in a different city.
Each transaction string transactions[i] consists of comma separated values representing the name, time (in minutes), amount, and city of the transaction.

Given a list of transactions, return a list of transactions that are possibly invalid.  You may return the answer in any order.

Example 1:
  Input: transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
  Output: ["alice,20,800,mtv","alice,50,100,beijing"]
  Explanation: The first transaction is invalid because the second transaction occurs within a difference of 60 minutes, have the same name and is in a different city. Similarly the second one is invalid too.

Example 2:
  Input: transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
  Output: ["alice,50,1200,mtv"]

Example 3:
  Input: transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
  Output: ["bob,50,1200,mtv"]

*/

/**
 * @param {string[]} transactions
 * @return {string[]}
 */

/*

  map by name
    add inx from original arr and split into array

  test list of transactions for each name
    sort by minutes lowest to highest
    add in orignal order if flagged

  return filter of original keep if is in the list of flagged indexes

  flag pair if
    === name
    60>= min
    != city

  flag single if
    1000 < amount
*/

/*
  t
    O(5n+logn --> n)
  s
    O(2n -> n)
*/

var invalidTransactions = function (transactions) {
  const map = new Map();

  for (let i = 0; i < transactions.length; i++) {
    let curr = transactions[i].slice(0, transactions[i].indexOf(','));
    if (map.has(curr)) {
      map
        .get(curr)
        .push([
          ...transactions[i].slice(transactions[i].indexOf(',') + 1).split(','),
          i,
        ]);
    } else {
      map.set(curr, [
        [
          ...transactions[i].slice(transactions[i].indexOf(',') + 1).split(','),
          i,
        ],
      ]);
    }
  }

  const list = {};

  for (let arr of map.values()) {
    if (arr.length > 1) {
      arr.sort((a, b) => Number(a[0]) - Number(b[0]));
      for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
          let b = 1;
          while (i - b >= 0) {
            if (Number(arr[i][0]) - Number(arr[i - b][0]) > 60) {
              break;
            } else {
              if (arr[i][2] !== arr[i - b][2]) {
                list[arr[i][3]] = true;
                list[arr[i - b][3]] = true;
              }
            }
            b++;
          }
        }
        if (Number(arr[i][1]) > 1000) {
          list[arr[i][3]] = true;
        }
      }
    } else {
      if (Number(arr[0][1]) > 1000) {
        list[arr[0][3]] = true;
      }
    }
  }
  return transactions.filter((val, inx) => list.hasOwnProperty(inx));
};

let cases = [
  {
    in: ['alice,20,800,mtv', 'alice,50,100,beijing'],
    out: ['alice,20,800,mtv', 'alice,50,100,beijing'],
  },
  {
    in: ['alice,20,800,mtv', 'alice,50,1200,mtv'],
    out: ['alice,50,1200,mtv'],
  },
  {
    in: ['alice,20,800,mtv', 'bob,50,1200,mtv'],
    out: ['bob,50,1200,mtv'],
  },
  {
    in: [
      'bob,241,725,barcelona',
      'xnova,523,1770,barcelona',
      'alex,516,617,barcelona',
      'chalicefy,510,1400,bangkok',
      'bob,875,256,amsterdam',
      'xnova,685,1723,amsterdam',
      'alex,748,888,barcelona',
      'xnova,206,917,bangkok',
    ],
    out: [
      'xnova,523,1770,barcelona',
      'chalicefy,510,1400,bangkok',
      'xnova,685,1723,amsterdam',
    ],
  },
  {
    in: [
      'xnova,261,1949,chicago',
      'bob,206,1284,chicago',
      'xnova,420,996,bangkok',
      'chalicefy,704,1269,chicago',
      'iris,124,329,bangkok',
      'xnova,791,700,amsterdam',
      'chalicefy,572,697,budapest',
      'chalicefy,231,310,chicago',
      'chalicefy,763,857,chicago',
      'maybe,837,198,amsterdam',
      'lee,99,940,bangkok',
      'bob,132,1219,barcelona',
      'lee,69,857,barcelona',
      'lee,607,275,budapest',
      'chalicefy,709,1171,amsterdam',
    ],
    out: [
      'xnova,261,1949,chicago',
      'bob,206,1284,chicago',
      'chalicefy,704,1269,chicago',
      'chalicefy,763,857,chicago',
      'lee,99,940,bangkok',
      'bob,132,1219,barcelona',
      'lee,69,857,barcelona',
      'chalicefy,709,1171,amsterdam',
    ],
  },
];

const tester = require('../tester');
tester.oneInput(cases, invalidTransactions);
