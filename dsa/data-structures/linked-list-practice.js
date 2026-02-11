class LinkedList {
    constructor(value) {
        this.head = new ListNode(value);
    }

    addNode(value) {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = new ListNode(value);
    }

    addNodeFront(value) {
        let newListNode = new ListNode(value);
        newListNode.next = this.head;
        this.head = newListNode;
    }

    addNodeAt(value, valueIndex) {
        let current = this.head;

        while(current.value !== valueIndex) {
            console.log(current.value);
            current = current.next;
        }
        let newNode = new ListNode(value);
        newNode.next = current.next;
        current.next = newNode;
    }
}

class ListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next || null;
    }
}

let newList = new LinkedList(3);

for(let k = 1; k <= 1000; k++) {
    newList.addNode(k);
}
newList.addNodeFront(9);
newList.addNodeAt(36, 3);
// newList.addNode(4);
// newList.addNode(16);

console.log(newList);