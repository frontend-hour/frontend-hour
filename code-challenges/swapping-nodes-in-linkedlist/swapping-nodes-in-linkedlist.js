/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let current = head;
    let temp = [];
    
    while(current.next) {
        temp.push(current);
        current = current.next;
    }
    temp.push(current);
    
    let start = temp[k - 1];
    temp.reverse();
    let endVal = temp[k - 1].val;
    
    temp[k - 1].val = start.val;
    start.val = endVal;
    
    return head;
};
