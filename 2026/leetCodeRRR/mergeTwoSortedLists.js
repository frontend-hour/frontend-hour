/**
 * Definition for singly-linked list node
 */
function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

/**
 * Merge two sorted linked lists
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Approach 1: Iterative - By Raghu Ram Reddy

// Intuition

// We can merge the two lists by iterating through both lists simultaneously and comparing the current 
// nodes of both lists. We can create a new list to store the merged result and use a pointer to 
// keep track of the current position in the new list.

// Algorithm

// We can create a dummy node to serve as the head of the merged list. We can then use a pointer to 
// iterate through both lists and compare the current nodes. We can append the smaller node to the 
// merged list and move the pointer of that list forward. Once we reach the end of one of the lists, 
// we can append the remaining nodes of the other list to the merged list. 
// Finally, we can return the next node of the dummy node as the head of the merged list.

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0);
    let current = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2;

    return dummy.next;
}

