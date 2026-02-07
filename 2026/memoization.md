# JavaScript Function Memoization  A Deep, Practical, and Theoretical Guide

> This document explains **function memoization in JavaScript** from the ground up. It covers *why memoization exists*, *how it works internally*, *when it helps*, *when it hurts*, and *how it relates to closures, recursion, performance, and real-world systems*. This is written in a **textbook-level, concept-first style** suitable for serious learners and engineers.

---

## 1. What Is Memoization?

**Memoization** is an optimization technique where a function **remembers the results of previous computations** so that future calls with the same inputs can return the cached result instantly.

> Memoization trades **memory** for **speed**.

### One-Line Definition

> Memoization is caching the output of a pure function based on its input arguments.

---

## 2. The Core Motivation: Avoid Recomputing Work

Consider a function that performs expensive computation:

```js
function slowSquare(n) {
    // simulate heavy work
    for (let i = 0; i < 1e9; i++) {}
    return n * n;
}

slowSquare(5); // slow
slowSquare(5); // equally slow again
```

### Problem

* The function **does the same work repeatedly**
* JavaScript has no built-in memory of past calls
* Time complexity remains high for repeated inputs

This is where memoization becomes valuable.

---

## 3. Pure Functions: The Foundation of Memoization

Memoization **only works correctly** when the function is **pure**.

### A Pure Function

A function is pure if:

1. Same input → same output
2. No side effects (no mutation, no I/O, no randomness)

```js
function add(a, b) {
    return a + b;
}
```

### An Impure Function (❌ Not Safe to Memoize)

```js
let counter = 0;

function increment(x) {
    counter++;
    return x + counter;
}
```

Memoizing impure functions leads to **incorrect results**.

---

## 4. The Simplest Memoization Pattern

```js
function memoizedSquare() {
    const cache = {};

    return function (n) {
        if (n in cache) {
            return cache[n];
        }
        const result = n * n;
        cache[n] = result;
        return result;
    };
}

const square = memoizedSquare();

square(5); // computed
square(5); // returned from cache
```

### What Is Happening Internally?

* `cache` lives inside a **closure**
* The returned function retains access to `cache`
* Cache persists across calls

This is the **core mechanism** of memoization in JavaScript.

---

## 5. Closures: The Real Power Behind Memoization

Memoization in JavaScript is impossible without **closures**.

```js
function outer() {
    const secret = {};
    return function inner() {
        return secret;
    };
}
```

### Key Insight

> A closure allows a function to "remember" data even after the outer function has finished executing.

Memoization is simply **controlled memory via closures**.

---

## 6. Memoizing Functions with Multiple Arguments

```js
function memoize(fn) {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function multiply(a, b) {
    return a * b;
}

const memoizedMultiply = memoize(multiply);

memoizedMultiply(2, 3); // computed
memoizedMultiply(2, 3); // cached
```

### Why `JSON.stringify`?

* Objects cannot be used directly as keys
* Strings provide deterministic cache keys

⚠️ This approach has limitations (discussed later).

---

## 7. Memoization vs Caching (Important Distinction)

| Memoization    | Caching          |
| -------------- | ---------------- |
| Function-level | System-level     |
| Input → Output | Arbitrary data   |
| Automatic      | Often manual     |
| Deterministic  | May be heuristic |

> Memoization is a **specific form of caching** with strict rules.

---

## 8. Recursive Memoization: Fibonacci Example

### Naive Fibonacci (Exponential Time)

```js
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
```

Time Complexity: **O(2ⁿ)** ❌

---

### Memoized Fibonacci

```js
function memoizedFib() {
    const cache = {};

    return function fib(n) {
        if (n in cache) return cache[n];
        if (n <= 1) return n;

        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
}

const fib = memoizedFib();

fib(40); // fast
```

Time Complexity: **O(n)** ✅

---

## 9. Memory vs Performance Trade-Off

Memoization is **not free**.

### Benefits

* Drastically improves repeated computations
* Reduces CPU usage
* Ideal for expensive deterministic functions

### Costs

* Increased memory usage
* Cache can grow unbounded
* Serialization overhead for arguments

> Memoization is a **scalpel**, not a hammer.

---

## 10. Cache Invalidation: The Hardest Problem

> "There are only two hard problems in computer science: cache invalidation and naming things."

### Common Strategies

* Time-based expiry
* Size limits (LRU cache)
* Manual clearing

Simple memoization examples **ignore invalidation**, but production systems cannot.

---

## 11. Memoization Pitfalls (Very Important)

### 1. Objects as Arguments

```js
memoizedFn({ a: 1 });
memoizedFn({ a: 1 }); // ❌ different reference
```

### 2. Large Argument Space

Too many unique inputs → memory leak

### 3. Side Effects

Memoizing impure functions breaks logic

---

## 12. Real-World Use Cases

* Dynamic programming
* Parsing and compilation
* Data transformation pipelines
* Expensive mathematical computations
* React selectors (`reselect`)

---

## 13. How Libraries Do It

### Lodash

```js
_.memoize(fn)
```

* Uses `Map`
* Allows custom resolver

### React

* `useMemo` is **not true memoization**
* It memoizes **values**, not function calls

---

## 14. Mental Model to Remember

> Memoization = Function + Closure + Cache + Pure Logic

If any part is missing, memoization fails.

---

## 15. Final Summary

* Memoization avoids repeated computation
* Powered by closures
* Works only with pure functions
* Trades memory for speed
* Essential for performance-critical code

# Advanced Memoization Concepts — Production, Performance, and Pitfalls

> This document extends memoization into **real-world, production-grade engineering**. These are the topics that separate *conceptual understanding* from *professional mastery*. Each section focuses on **why**, **how**, and **when** — not just syntax.

---

## 1. LRU Cache Implementation (Production‑Grade Memoization)

### Why Basic Memoization Is Not Enough

Simple memoization examples:

```js
const cache = {};
```

have a **fatal flaw**:

> The cache grows forever.

In production systems:

* Inputs can be unbounded
* Memory is finite
* Old values must be evicted

This leads us to **LRU (Least Recently Used) caching**.

---

## 1.1 What Is an LRU Cache?

An **LRU cache**:

* Keeps a fixed maximum size
* Evicts the *least recently accessed* item
* Prioritizes recent usage patterns

This matches real program behavior remarkably well.

---

## 1.2 LRU Cache Implementation Using `Map`

`Map` preserves **insertion order**, which makes LRU implementation clean and efficient.

```js
class LRUCache {
    constructor(limit = 5) {
        this.limit = limit;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return undefined;

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value); // move to most-recent
        return value;
    }

    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        this.cache.set(key, value);

        if (this.cache.size > this.limit) {
            const leastUsedKey = this.cache.keys().next().value;
            this.cache.delete(leastUsedKey);
        }
    }
}
```

### Why This Is Production‑Grade

* `O(1)` get/set operations
* Predictable memory usage
* Real eviction strategy

This is the **minimum standard** for serious memoization.

---

## 2. Map vs Object — Cache Internals

Choosing the wrong cache structure can silently destroy performance.

---

## 2.1 Object as Cache

```js
const cache = {};
cache[key] = value;
```

### Characteristics

* Keys are **strings only**
* Prototype chain pollution risk
* No guaranteed order
* Manual size tracking

### Hidden Danger

```js
cache['__proto__'] = 'oops';
```

This can break your entire program.

---

## 2.2 Map as Cache (Preferred)

```js
const cache = new Map();
cache.set(key, value);
```

### Advantages

* Keys can be **any type**
* No prototype collisions
* Maintains insertion order
* Accurate size via `cache.size`

> For memoization, **Map is almost always superior**.

---

## 2.3 Performance Reality

| Feature         | Object | Map |
| --------------- | ------ | --- |
| Arbitrary keys  | ❌      | ✅   |
| Iteration order | ❌      | ✅   |
| Memory safety   | ⚠️     | ✅   |
| LRU-friendly    | ❌      | ✅   |

---

## 3. WeakMap-Based Memoization

### The Problem: Memory Leaks

If memoized functions receive **object arguments**, caches can grow without bound.

```js
memoizedFn({ a: 1 });
memoizedFn({ a: 1 }); // new object, new cache entry
```

This causes **memory retention**.

---

## 3.1 What Is WeakMap?

A `WeakMap`:

* Allows only **objects as keys**
* Does **not prevent garbage collection**
* Automatically cleans up unused entries

> WeakMaps are invisible to the garbage collector in a good way.

---

## 3.2 WeakMap Memoization Pattern

```js
function memoizeWithWeakMap(fn) {
    const cache = new WeakMap();

    return function (obj) {
        if (cache.has(obj)) {
            return cache.get(obj);
        }
        const result = fn(obj);
        cache.set(obj, result);
        return result;
    };
}
```

### When This Is Ideal

* Functions take **objects as arguments**
* Lifecycle tied to object lifetime
* UI frameworks and DOM-related logic

### Limitation

* Cannot inspect size
* Cannot iterate

This is a **feature**, not a bug.

---

## 4. Memoization vs Dynamic Programming

These concepts are often confused.

---

## 4.1 Memoization

* Top‑down approach
* Cache function calls
* Driven by demand

```js
fib(n) → cached result
```

---

## 4.2 Dynamic Programming

* Bottom‑up approach
* Build solutions iteratively
* Explicit table construction

```js
for (let i = 2; i <= n; i++)
```

---

## 4.3 Key Differences

| Memoization      | Dynamic Programming |
| ---------------- | ------------------- |
| Recursive        | Iterative           |
| Lazy             | Eager               |
| Function-centric | Data-centric        |

> Memoization is a **technique**. Dynamic programming is a **strategy**.

---

## 5. Why `useMemo` Is Often Misused (Critical Section)

### The Myth

> "useMemo improves performance"

This is **false by default**.

---

## 5.1 What `useMemo` Actually Does

```js
const value = useMemo(() => compute(a, b), [a, b]);
```

* Memoizes a **value**, not a function
* Cache lasts only for the component lifecycle
* Recomputed if dependencies change

---

## 5.2 Common Misuse Patterns

### ❌ Wrapping Cheap Computations

```js
useMemo(() => a + b, [a, b]);
```

This adds overhead without benefit.

---

### ❌ Using as a Guarantee

`useMemo` is a **hint**, not a promise.

React may discard memoized values under memory pressure.

---

## 5.3 Correct Use Cases

* Expensive computations
* Referential equality for memoized children
* Stable object/array references

> `useMemo` exists to prevent *re-renders*, not to replace algorithms.

---

## 6. Benchmarks & Performance Intuition

### 6.1 When Memoization Wins

* High computation cost
* Small, repetitive input domain
* Deterministic output

---

### 6.2 When Memoization Loses

* Large argument space
* Cheap functions
* One-time calls

---

## 6.3 Mental Performance Diagram (Conceptual)

```text
Execution Cost
│
│        Without Memoization
│       /
│      /\
│     /  \
│    /    \
│___/______\____________ Calls

│   With Memoization
│__|____|____|__________ Calls
```

Memoization flattens repeated cost.

---

## 7. Final Engineering Guidelines

### Use Memoization When

* Profiling shows repeated expensive calls
* Inputs repeat frequently
* Cache size is controlled

### Avoid Memoization When

* Logic is cheap
* Inputs are unbounded
* Correctness is fragile

---

## 8. Final Takeaway

> Memoization is not a trick — it is **controlled memory management**.

Understanding:

* LRU eviction
* Map vs WeakMap
* React’s semantics
* Algorithmic tradeoffs


This is how performance thinking actually works.

