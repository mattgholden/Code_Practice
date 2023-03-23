// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

function deleteDuplicates(head) {
    if (!head || !head.next) {
      return head;
    }
  
    let sample = new ListNode(-1); // create a sample node to handle edge cases
    sample.next = head;
    let prev = sample;
    let curr = head;
  
    while (curr) {
      if (curr.next && curr.val === curr.next.val) {
        while (curr.next && curr.val === curr.next.val) {
          curr = curr.next;
        }
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }
  
    return sample.next;
  }