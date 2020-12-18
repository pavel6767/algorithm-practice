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

function ListNode(key, value, prev, next) {
  this.key = key;
  this.value = value;
  this.prev = prev;
  this.next = next;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.tail = new ListNode(null)
  this.head = new ListNode(null)
  this.map = new Map()
  this.tail.prev = this.head
  this.head.next = this.tail
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const node = this.map.get(key)
  if(!node) return -1
  
  const prev = node.prev
  const next = node.next
  prev.next = next
  next.prev = prev

  node.prev = this.head
  node.next = this.head.next

  this.head.next.prev = node
  this.head.next = node

  return node.val
};


/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let node = this.map.get(key)
  let prev, next
  if(node) {
    node.val = value
    prev = node.prev
    next = node.next
    prev.next = next
    next.prev = prev
    node.next = null
    node.prev = null
  } else {
    if(this.capacity === this.map.size) {
      const removeNode = this.tail.prev
      prev = removeNode.prev
      prev.next = this.tail
      this.tail.prev = prev
      removeNode.prev = null
      removeNode.next = null
      this.map.delete(removeNode.key)
    }
  }
  node = new ListNode(key, value)
  
  next = this.head.next
  
  node.prev = this.head
  node.next = next
  
  next.prev = node
  this.head.next = node
  
  this.map.set(key, node)
  return null
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2);

// console.log(cache.put(1, 1));
// console.log(cache.put(2, 2));
// console.log("1 :: ", cache.get(1));       // returns 1
// console.log(cache.put(3, 3));    // evicts key 2
// console.log("-1 :: ", cache.get(2));       // returns -1 (not found)
// console.log(cache.put(4, 4));    // evicts key 1
// console.log("-1 :: ", cache.get(1));       // returns -1 (not found)
// console.log("3 :: ", cache.get(3));       // returns 3
// console.log("4 ::", cache.get(4));       // returns 4
// ["LRUCache","put","put","get","get","put","get","get","get"]
// [[2],       [2,1],[3,2],[3],  [2],[4,3],  [2],[3],[4]]
// debugger
cache.put(2,1)
cache.put(3,2)
console.log("2 :: ", cache.get(3))
console.log("1 :: ", cache.get(2))
cache.put(4,3)
console.log("1 :: ", cache.get(2))
console.log("-1 :: ", cache.get(3))
console.log("3 :: ", cache.get(4))