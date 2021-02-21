//Linkedlist class
class ListNode {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

function merge(list1, list2) {
    var list3 = new ListNode(null, null);
    var prev = list3;
    //Iterate over two linkedlists till they are empty 
    while (list1 !== null && list2 !== null) {
        if (list1.data <= list2.data) {
            prev.next = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            list2 = list2.next;
        }
        prev = prev.next;
    }

    if (list1 === null) { prev.next = list2; }
    if (list2 === null) { prev.next = list1; }

    return list3.next;
}

//Analysis  - we have one cycle, O(n)

var n3 = new ListNode(1, null);
var n2 = new ListNode(55, n3);
var n1 = new ListNode(444, n2);
var list1 = n1;

var n6 = new ListNode(30, null);
var n5 = new ListNode(6, n6);
var n4 = new ListNode(5, n5);
var list2 = n4;


merge(list1, list2);


