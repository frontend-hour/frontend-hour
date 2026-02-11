class Queue {
    constructor() {
        this._storage = {};
        this._head = 0;
        this._length = 0;
    }

    enqueue(value) {
        this._storage[this._head + this._length] = value;
        this._length++;
    }

    dequeue() {
        if (this._length) {
            let currentValue = this._storage[this._head];
            delete this._storage[this._head];
            this._length--;
            this._head++;
            return currentValue;
        }
    }
}

let myQ = new Queue();

myQ.enqueue('zero');
myQ.enqueue('one');
myQ.enqueue('two');
myQ.enqueue('three');

