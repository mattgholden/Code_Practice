// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head){
    if(!head)
    return null;

    //Set a variable called preRev for before reverse is complete.
    let preRev = head.next;
    head.next = null;

    while(preRev){
        let rev = preRev.next;
        head = preRev;
        preRev = rev;
    }
    return head;
}

//// Python for good measure////
// class Solution (object):
//      def reverseList(self, head):
//          prev = None
//          curr = head
//          while curr:
//              next = curr.next
//              curr.next = prev
//              prev = curr
//              curr = next
//          return prev