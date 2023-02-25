// Given the head of a linked list, remove the nth node from the end of the list and return its head.
const removeNthFromEnd = (head, n) => {
    // Initialize two pointers
    let first = head;
    let second = head;
    // Move the second pointer n nodes ahead of the first pointer
    for (let i = 0; i < n; i++) {
        second = second.next;
    }
    // If the second pointer is null, the node to be deleted is the head
    if (second === null) {
        return head.next;
    }
    // Move both pointers until the second pointer reaches the end of the list
    while (second.next !== null) {
        first = first.next;
        second = second.next;
    }
    // Delete the nth node from the end of the list
    first.next = first.next.next;
    return head;
};