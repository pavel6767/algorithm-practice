const addTwoNumbers = require('../2. Add Two Numbers.js');

function ListNode(val) {
  this.val = val;
  this.next = null;
}

test('adding 345 + 465 = 810', () => {
  let l1 = new ListNode(5);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);

  let l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);

  let l3 = new ListNode(0);
  l3.next = new ListNode(1);
  l3.next.next = new ListNode(8);

  expect(addTwoNumbers(l1, l2)).toStrictEqual(l3);
});
