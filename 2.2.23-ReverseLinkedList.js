// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function(head){
    if(!head)
    return null;

    let preRev = head.next;
    head.next = null;

    while(preRev){
        let rev = preRev.next;
        head = preRev;
        preRev = rev;
    }
    return head;
}