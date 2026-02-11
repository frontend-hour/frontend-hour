/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    while(current) {
        let nextVal = current.next ? current.next.val : null;
        if(current.val === nextVal) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};
