/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

  MinStack minStack = new MinStack();
  minStack.push(-2);
  minStack.push(0);
  minStack.push(-3);
  minStack.getMin();   --> Returns -3.
  minStack.pop();
  minStack.top();      --> Returns 0.
  minStack.getMin();   --> Returns -2.

*/

/**
 * initialize your data structure here.
 */

// function StackNode(val) {
//   this.val = val;
//   this.min = null;
// }

// var MinStack = function () {
//   this.arr = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function (x) {
//   let newNode = new StackNode(x);
//   newNode.min = this.getMin() < x ? this.getMin() : x;
//   this.arr.push(newNode);
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function () {
//   this.arr.pop();
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function () {
//   return this.arr[this.arr.length - 1].val;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function () {
//   return this.arr.length === 0
//     ? Number.POSITIVE_INFINITY
//     : this.arr[this.arr.length - 1].min;
// };


/*
sol 2
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.min = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const {stack, min} = this
    stack.push(x)
    if(min.length === 0 || min[min.length-1] >= x) {
        min.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const pop = this.stack.pop()
    if(pop === this.min[this.min.length-1]) {
        this.min.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};

function tester() {
  var stack = new MinStack();
  stack.push(-2);
  stack.push(0);
  stack.push(-3);
  console.log(stack.getMin()); //--> Returns -3.
  stack.pop();
  console.log(stack.top()); //--> Returns 0.
  console.log(stack.getMin()); //--> Returns -2.
}
tester();
