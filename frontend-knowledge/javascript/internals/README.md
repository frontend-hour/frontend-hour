# JavaScript Internals

Looking under the hood of the JavaScript runtime.

## Key Concepts
- **Event Loop**: How JavaScript handles asynchronous operations, the task queue, and the microtask queue.
- **Recursion**: Functions calling themselves.
- **Iterators & Generators**: Custom traversal of data.

## Files
- **[eventloop.md](eventloop.md)**: A deep technical guide to the Event Loop.
- **[event-loop.js](event-loop.js)**: Code demonstrating event loop phases.
- **[eventBubbling.html](eventBubbling.html)**: Visualizing event propagation in the DOM.
- **[recursion.js](recursion.js)**: Examples of recursive functions.
- **[iterators-generators.js](iterators-generators.js)**: Using generator functions.

## Deep Dive

### Iterators and Generators

An iterator lets you iterate through a collection's contents one at a time, pausing at each item.  
An iterator is any object that implements the iterator protocol by having a next() method that returns a value property and a done property.
Generator is also kind of iterator when called returns and interable that pipelines all the yeild values one after the other on every next call on the returned iterable.
yeild is like pause or temporary return form the function.

```javascript
function createIterator(array) {
  let count = 0;
  return function next() {
    let item = array[count];
    count += 1;
    return item;
  };
}

const names = ['a', 'b', 'c'];
const namesIterator = createIterator(names);

console.log(namesIterator);
console.log(namesIterator());
console.log(namesIterator());
console.log(namesIterator());

function* createFlow() {
  let x = 0;
  let y = 90;
  let result = x + y;
  yield `Frontend Hour ${result}`;

  const newNum = yield 'returnVal';

  const num = 10 + newNum;
  yield num;
}

const generatorFlow = createFlow();

console.log(generatorFlow.next());
console.log(generatorFlow.next());
console.log(generatorFlow.next(10));
console.log(generatorFlow.next());
```
