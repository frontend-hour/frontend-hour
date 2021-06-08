/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let current = list1;
    let a1;
    let b1;
    let count1 = 0;
    let b2;
    
    while(current.next) {
        if(count1 === (a - 1)) {
            a1 = current;
        }
        if(count1 === b) {
            b1 = current
        }
        count1 += 1;
        current = current.next;
    }
    
    let current1 = list2;
    while(current1.next) {
        current1 = current1.next;
    }

    current1.next = b1.next;
    a1.next = list2;
    return list1;
};
