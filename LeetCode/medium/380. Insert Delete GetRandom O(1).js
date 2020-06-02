/*

Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();

*/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.arr = [];
  this.set = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.set.hasOwnProperty(val)) return false;

  this.set[val] = this.arr.length;
  this.arr.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.set.hasOwnProperty(val)) return false;
  /*
    delete val from set

    delete val from arr
    if inx of val is last
      pop arr
    else
      change last elem of arr for inx
      update set

  */
  const inx = this.set[val];
  delete this.set[val];

  if (inx !== this.arr.length - 1) {
    let last = this.arr[this.arr.length - 1];
    this.set[last] = inx;
    this.arr[inx] = last;
  }
  this.arr.pop();

  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.arr.length);

  return this.arr[random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const randomSet = new RandomizedSet();
console.log(randomSet.insert(1));
console.log(randomSet.remove(2));
console.log(randomSet.insert(2));
console.log(randomSet.getRandom());
console.log(randomSet.remove(1));
console.log(randomSet.insert(2));
console.log(randomSet.getRandom());
/*
t
f
t
rand
t
f
2
*/
