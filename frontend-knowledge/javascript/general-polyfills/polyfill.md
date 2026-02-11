# JavaScript Polyfills   Deep Dive

> **Audience:** Senior JavaScript engineers, interview preparation, and runtime-level understanding

This document explains **what polyfills really are**, **why they matter**, and then dives deeply into two classic polyfills:

1. **Promise (conceptual + simplified polyfill)**
2. **Function.prototype.bind polyfill**

The goal is *not* to re-implement the ECMAScript spec perfectly, but to understand **mechanics, trade-offs, and limitations**.

---

## 1. What Is a Polyfill?

A **polyfill** is code that implements a feature **that the JavaScript engine does not natively support**, so that newer language features can run in older environments.

### Key Characteristics

* Runs **before** application code
* Adds missing APIs to global objects (`Promise`, `Array.prototype`, etc.)
* Must closely follow **observable behavior**, not internal engine optimizations

> Polyfills replicate *behavior*, not *performance*.

---

## 2. Why Polyfills Matter

* Backward compatibility (older browsers, embedded runtimes)
* Understanding how language features *actually work*
* Interview readiness (Promises, bind, call/apply)
* Writing predictable abstractions

Polyfills force you to confront:

* `this` binding rules
* Closures
* State machines
* Async control flow

---

# PART I   Promise Polyfill (Conceptual)

## 3. What a Promise Really Is

A Promise is:

* A **state machine**
* With **three states**: `pending`, `fulfilled`, `rejected`
* That allows **registration of callbacks** for future execution

> Promises do NOT perform async work   they **represent** async results.

---

## 4. Minimal Promise Polyfill (Learning-Oriented)

```js
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.thenCallback = null;
    this.catchCallback = null;

    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    try {
      executor(this.resolve, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }

  resolve(data) {
    if (this.state !== 'pending') return;
    this.state = 'fulfilled';
    this.value = data;
    if (this.thenCallback) {
      this.thenCallback(data);
    }
  }

  reject(error) {
    if (this.state !== 'pending') return;
    this.state = 'rejected';
    this.value = error;
    if (this.catchCallback) {
      this.catchCallback(error);
    }
  }

  then(cb) {
    this.thenCallback = cb;
    return this; // enables basic chaining
  }

  catch(cb) {
    this.catchCallback = cb;
    return this;
  }
}
```

---

## 5. Example Usage

```js
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('My Promise Resolved');
  }, 1000);
});

p.then(value => console.log(value));
```

---

## 6. What This Polyfill Teaches

### ✔ Concepts Covered

* Executor pattern
* State transitions
* Callback registration
* Closure over internal state

### ❌ What It Does NOT Handle

* Microtask queue
* Multiple `.then()` handlers
* Chaining with returned promises
* Error bubbling
* Thenable resolution

> Real Promises are vastly more complex (Promise/A+ spec).

---

## 7. Why Promise Polyfills Are Hard

Native Promises rely on:

* **Job queues (microtasks)**
* Engine-level scheduling
* Spec-defined resolution procedures

This is why **full Promise polyfills are large and slow** compared to native implementations.

---

# PART II   Function.prototype.bind Polyfill

## 8. What `bind` Does (Conceptually)

`bind` creates a **new function** with:

* A fixed `this` value
* Optionally pre-filled arguments (partial application)

```js
fn.bind(context, arg1, arg2)
```

> `bind` does NOT invoke the function   it **returns a new one**.

---

## 9. Case 1   No Arguments

```js
const city = {
  name: 'London',
  printCityLove() {
    console.log(`I love ${this.name} city`);
  }
};

setTimeout(city.printCityLove.bind(city), 1000);
```

Without `bind`, `this` would be `undefined` (or `window`).

---

## 10. Case 2   With Arguments

```js
const city = {
  name: 'London',
  printCityLove(person) {
    console.log(`${person} loves ${this.name} city`);
  }
};

setTimeout(city.printCityLove.bind(city, 'Raghu'), 100);
```

Here, `bind` performs **partial application**.

---

## 11. Simple bind Polyfill

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...boundArgs) {
    const originalFn = this;

    if (typeof originalFn !== 'function') {
      throw new TypeError('Bind must be called on a function');
    }

    return function (...args) {
      return originalFn.apply(context, [...boundArgs, ...args]);
    };
  };
}
```

---

## 12. How the bind Polyfill Works

### Step-by-step

1. Capture the original function (`this`)
2. Capture the bound context
3. Capture partially applied arguments
4. Return a wrapper function
5. Call original function using `apply`

This is **pure closure-based binding**.

---

## 13. What This Polyfill Misses

Native `bind` also handles:

* `new` operator behavior
* Prototype inheritance
* Function length & name

Example missing case:

```js
const Bound = Original.bind(ctx);
new Bound(); // special handling in native bind
```

Supporting this requires **prototype manipulation**.

---

## 14. Why bind Polyfills Are Still Valuable

Even incomplete, they teach:

* `this` resolution rules
* Difference between call/apply/bind
* Closures as behavioral modifiers

---

## Final Takeaways

* Polyfills expose **language mechanics**, not magic
* Promise polyfills teach **state machines & async modeling**
* bind polyfills teach **this binding & closures**
* Native implementations are faster because they live inside the engine

> If you understand polyfills, you understand JavaScript.

---

### Recommended Next Topics

* call / apply polyfills
* Promise chaining polyfill
* async/await transpilation
* Structured cloning
* WeakMap-based polyfills
