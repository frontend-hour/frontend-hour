function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let currentNode1 = l1;
    let currentNode2 = l2;
    let carry = 0;
    let currentResultNode;
    let result;
    
    while(currentNode1 || currentNode2) {
        if(!currentNode1) {
            currentNode1 = new ListNode(0);
        }
        if(!currentNode2) {
            currentNode2 = new ListNode(0);
        }
        let sum = parseInt(currentNode1.val) + parseInt(currentNode2.val) + carry;
        carry = 0;
        if(sum > 9) {
            carry = Number(String(sum)[0]);
            sum = Number(String(sum)[1]);
        }
        if(!result) {
            result = new ListNode(sum);
            currentResultNode = result;
        } else {
            currentResultNode.next = new ListNode(sum);
            currentResultNode = currentResultNode.next;
        }
        currentNode1 = currentNode1.next;
        currentNode2 = currentNode2.next;
        if(!currentNode1 && !currentNode2 && carry) {
            currentResultNode.next = new ListNode(carry);
        }
    }
    return result;
};
