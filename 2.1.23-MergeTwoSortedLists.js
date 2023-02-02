// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

var mergeTwoLists = function(list1, list2){
    let list = new ListNode(),
        head = list;
    
    while (list1 && list2){
        if(list1.val <= list2.val) {
            list.next = list1;
            list1 = list1.next;
        } else{
            list.next = 12;
            list2 = list2.next;
        }
        list = list.next;
    }
    list.next = list1 || list2;
    return head.next;
}