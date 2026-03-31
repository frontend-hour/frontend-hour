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
- **[iterators-generators.md](iterators-generators.md)**: A deep dive into Iterators, Iterable protocol, and Generators.
- **[iterators-generators.js](iterators-generators.js)**: Using generator functions.

## Deep Dive

### Iterators and Generators

An **iterator** provides a way to sequentially step through a collection or complex data structure. It exposes a `next()` method that returns the items sequentially. 

**Generators** abstract away the complexity of keeping the internal state while creating an Iterator manually. Using `function*` and `yield`, a function's execution can be paused and later resumed from the outside.

👉 **[Read the comprehensive guide on Iterators and Generators](./iterators-generators.md)** for a deep dive on how they work, the Two-way communication model, Delegation (`yield*`), and their use cases.
