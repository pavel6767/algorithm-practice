/*

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4

*/

/*
arr[1] // rotate array left push(unshift)
arr[1,2]

arr[2,1] get 1
arr[3,1] add 3
arr[3,4] add 4

arr[4,3] get 3
arr[3,4] get 4

arr[val]
map
  {
    key:{inx}
  }

*/

function Node(key, value, prev, next) {
  this.key = key;
  this.value = value;
  this.prev = prev;
  this.next = next;
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.head = new Node(null);
  this.tail = new Node(null);

  this.capacity = capacity;
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }

  let node = this.map.get(key);

  let prev = node.prev;
  let next = node.next;
  prev.next = next;
  next.prev = prev;

  node.prev = this.head;
  node.next = this.head.next;
  this.head.next = node;

  return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    let prev = node.prev;
    let next = node.next;
    prev.next = node.next;
    next.prev = node.prev;
    this.map.delete(key);
  } else if (this.map.size === this.capacity) {
    let d = this.tail.prev;
    let prev = d.prev;
    prev.next = this.tail;
    this.tail.prev = prev;
    this.map.delete(d.key);
  }
  const node = new Node(key, value);
  let next = this.head.next;
  this.head.next = node;
  next.prev = node;
  node.prev = this.head;
  node.next = next;
  this.map.set(key, node);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2);

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1); // returns 1
// cache.put(3, 3);
// cache.get(2); // returns -1 (not found)
// cache.put(4, 4);
// cache.get(1); // returns -1 (not found)
// cache.get(3); // returns 3
// cache.get(4); // returns 4
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // returns 1
cache.put(3, 3);
console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4);

console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
console.log('size ', cache.map.size); // returns 4
