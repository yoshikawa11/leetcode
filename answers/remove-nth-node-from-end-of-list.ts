function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast: ListNode | null = dummy;
  let slow: ListNode | null = dummy;

  for (let i = 0; i <= n; i++) {
    if (fast) fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow!.next;
  }

  slow!.next = slow!.next ? slow!.next.next : null;

  return dummy.next;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
