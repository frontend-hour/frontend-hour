# Iterators and Generators in JavaScript

JavaScript provides built-in mechanisms for iterating over data collections using **Iterators** and **Generables**. To simplify the creation of these iterators, JavaScript introduced **Generators** in ES6. These concepts are foundational for features like `for...of` loops, spread operators, and `async/await`.

## 1. The Iterator Protocol

An **iterator** is any object that implements the **Iterator protocol**. This means it must have a `next()` method that returns an object with two properties:
- `value`: The next value in the iteration sequence.
- `done`: A boolean indicating whether the iteration is complete (`true` if finished, `false` otherwise). If finished, `value` is optional but describes the return value if present.

### Simple Custom Iterator Example
```javascript
function createCustomIterator(array) {
  let index = 0;
  return {
    next: function() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

const namesIterator = createCustomIterator(['Alice', 'Bob', 'Charlie']);
console.log(namesIterator.next()); // { value: 'Alice', done: false }
console.log(namesIterator.next()); // { value: 'Bob', done: false }
console.log(namesIterator.next()); // { value: 'Charlie', done: false }
console.log(namesIterator.next()); // { value: undefined, done: true }
```

## 2. The Iterable Protocol

For an object to be **iterable**, it must implement the **Iterable protocol**. This requires the object (or its prototype chain) to have a property keyed by the `Symbol.iterator` symbol. The method must return an *iterator*.

Built-in iterables include:
- `String`
- `Array`
- `Map`
- `Set`
- `NodeList` & `arguments` object

When you use constructs like `for...of`, `...` (spread syntax), or `Array.from()`, under the hood JavaScript looks for `[Symbol.iterator]()` on the object and calls it.

### Making an Object Iterable
```javascript
const counter = {
  start: 1,
  end: 3,
  [Symbol.iterator]: function() {
    let current = this.start;
    const last = this.end;
    
    // Returning the iterator object
    return {
      next: function() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      }
    }
  }
};

// Now we can use for...of on our custom object!
for (const num of counter) {
  console.log(num); // Logs: 1, 2, 3
}
```

## 3. Generators

Creating iterators manually involves carefully maintaining internal state (like `index` or `current` above). **Generators** provide a concise and powerful alternative.

A Generator is a special type of function that can be paused and resumed, maintaining its variable bindings across re-entrances. It implicitly returns a **Generator Object**, which implements both the Iterable and Iterator protocols.

You create a generator using an asterisk: `function*`.

### The `yield` Keyword
Inside a generator, you use `yield` to pause execution and "yield" a value to the caller. Executing the generator function does *not* execute the body immediately; it returns an iterator.

```javascript
function* numberGenerator() {
  console.log("Generator started");
  yield 1;
  console.log("Resumed 1");
  yield 2;
  console.log("Resumed 2");
  return 3; 
}

const gen = numberGenerator(); // Returns iterator, does not log

console.log(gen.next()); // "Generator started", { value: 1, done: false }
console.log(gen.next()); // "Resumed 1", { value: 2, done: false }
console.log(gen.next()); // "Resumed 2", { value: 3, done: true }
console.log(gen.next()); // { value: undefined, done: true }
```
*Note: The return value (`3`) is attached to the final `{done: true}` object. `for...of` loops ignore the returned value and only process `yield`ed values.*

## 4. Advanced Generator Concepts

### Two-Way Communication (Passing values back)
The `next()` method not only retrieves the next value but can also *send* a value back into the generator. The argument passed to `next(val)` replaces the `yield` expression where the generator is currently paused.

```javascript
function* calculator() {
  const result1 = yield 10;
  // Execution paused above. On next(5), result1 becomes 5.
  
  const result2 = yield result1 * 2; 
  // Yields 10. execution paused. On next(100), result2 becomes 100.
  
  return result2;
}

const calc = calculator();
console.log(calc.next());     // { value: 10, done: false }
console.log(calc.next(5));    // { value: 10, done: false }  (5 * 2)
console.log(calc.next(100));  // { value: 100, done: true }
```
*Tip: The first `next()` call initializes the generator, so passing an argument to it has no effect.*

### Generator Delegation: `yield*`
You can yield values from another generator or iterable using `yield*`. This is useful for splitting complex generators or iterating through sub-trees.

```javascript
function* subGenerator() {
  yield 'b';
  yield 'c';
}

function* mainGenerator() {
  yield 'a';
  yield* subGenerator(); // Delegates to subGenerator
  yield* ['d', 'e'];     // Delegates to array iterable
  yield 'f';
}

console.log([...mainGenerator()]); 
// Output: ['a', 'b', 'c', 'd', 'e', 'f']
```

## 5. Practical Use Cases

### 1. Custom Iterables Made Simple
Instead of manually returning a `{ next: function }` object, use a generator for your `Symbol.iterator`:
```javascript
const myIterable = {
  items: [1, 2, 3],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item * 2;
    }
  }
};
console.log([...myIterable]); // [2, 4, 6]
```

### 2. Infinite Sequences (Lazy Evaluation)
Generators only compute values when asked, enabling the representation of infinite sequences without memory overflow.
```javascript
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

const seq = fibonacci();
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
console.log(seq.next().value); // 3
// We could do this forever safely.
```

### 3. Asynchronous Control Flow (Pre-async/await)
Before `async/await` made async programming completely synchronous-looking, libraries like `co` relied on two-way generator communication to yield Promises and resume execution when the promise resolved. Interestingly, `async/await` is largely built on top of the foundation provided by generators and promises!
