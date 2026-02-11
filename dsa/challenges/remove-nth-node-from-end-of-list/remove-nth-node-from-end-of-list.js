/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let current = head;
    let temp = [];
    
    while(current.next) {
        temp.push(current);
        current = current.next;
    }
    temp.push(current);
    temp.reverse();
    
    if(temp[n - 1].next) {
        temp[n - 1].val = temp[n - 1].next.val;
        temp[n - 1].next = temp[n - 1].next.next;
    } else {
        if(temp[n]) {
            temp[n].next = null;
        } else {
            head = head.next;
        }
    }
    return head;
};
