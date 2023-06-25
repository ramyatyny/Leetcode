

function addTwoNumbers(l1, l2) {
  let l3 = new ListNode(0);
  let carry = 0;
  let h3 = null;

  while (l1 && l2) {
    let value = l1.val + l2.val + carry;
    carry = Math.floor(value / 10);
    l3.next = new ListNode(value % 10);
    l3 = l3.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1) {
    let value = l1.val + carry;
    carry = Math.floor(value / 10);
    l3.next = new ListNode(value % 10);
    l3 = l3.next;
    l1 = l1.next;
  }

  while (l2) {
    let value = l2.val + carry;
    carry = Math.floor(value / 10);
    l3.next = new ListNode(value % 10);
    l3 = l3.next;
    l2 = l2.next;
  }

  if (carry) {
    l3.next = new ListNode(carry);
  }

  return l3.next;
};
let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1,l2));
