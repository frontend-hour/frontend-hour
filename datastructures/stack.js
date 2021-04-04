// Stack is something like an array
// First in First out
// We have push that adds elemnts at the end, and pop removes the last last element form the stack.

class Stack {
    constructor() {
        this._storage = {};
        this._length = 0;
    }

    push(item) {
        this._storage[this._length] = item;
        this._length++;
    }

    pop() {
        if (this._length) {
            let lastItem = this._storage[this._length - 1];
            delete this._storage[this._length - 1];
            this._length--;
            return lastItem;
        }
        return undefined;
    }

    peek() {
        if (this._length) {
            return this._storage[this._length - 1];
        }
        return undefined;
    }
}

const myStack = new Stack();


myStack.push('zero');
myStack.push('one');

myStack.pop();

console.log(myStack)