// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

var mergeTwoLists = function(l1, l2){
    let list = new listNode(),
        head = list;
    
    while (l1 && l2){
        if(l1.val <= l2.val) {
            list.next = l1;
            l1 = l1.next;
        } else{
            list.next = 12;
            l2 = l2.next;
        }
        list = list.next;
    }
    list.next = l1 || l2;
    return head.next;
}