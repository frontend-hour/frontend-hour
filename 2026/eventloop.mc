# JavaScript Event Loop   A Deep, Technical Guide (V8, Chrome, and Runtime Internals)

> This document is written for **senior engineers** who want a *precise mental model* of how JavaScript actually executes asynchronous code inside **Chrome / V8** and modern runtimes. It intentionally avoids beginner metaphors and instead focuses on **queues, scheduling, guarantees, and engine behavior**.

---

## 1. First Principles: What the Event Loop Really Is

At its core, the **event loop** is not a JavaScript feature.

> The event loop is a **runtime scheduling mechanism** that coordinates:
>
> * JavaScript execution
> * Asynchronous callbacks
> * Microtasks
> * Rendering
> * I/O completion

JavaScript itself (the language) is:

* **Single-threaded**
* **Synchronous by default**
* **Run-to-completion**

Everything asynchronous is an illusion created by the **runtime + event loop**.

---

## 2. The Execution Stack (Call Stack)

V8 executes JavaScript using a **call stack**.

```text
Call Stack (LIFO)
┌─────────────┐
│ function C  │
│ function B  │
│ function A  │
│ global()    │
└─────────────┘
```

### Key Guarantees

* Only **one frame** executes at a time
* No preemption (JS cannot be interrupted mid-frame)
* A function **must finish** before the next one starts

This is the **run-to-completion** guarantee.

---

## 3. Why the Event Loop Is Needed

Without an event loop:

```js
while (true) {}
```

* UI freezes
* No I/O callbacks
* No timers
* Browser is effectively dead

The event loop exists to:

* Let JS finish execution
* Then schedule the next unit of work

---

## 4. Tasks, Microtasks, and the Real Scheduling Model

Modern JavaScript runtimes have **multiple queues**, not one.

### High-Level View

```text
┌───────────────┐
│   Call Stack  │
└───────────────┘
        ↓
┌───────────────┐
│ Microtask Q  │  ← Promises, queueMicrotask
└───────────────┘
        ↓
┌───────────────┐
│ Task Queue   │  ← setTimeout, I/O, UI events
└───────────────┘
        ↓
┌───────────────┐
│ Rendering    │
└───────────────┘
```

---

## 5. Macrotasks (Tasks)

Macrotasks represent **units of work scheduled by the host environment**.

### Common Task Sources

* `setTimeout`
* `setInterval`
* `setImmediate` (Node)
* DOM events
* Network callbacks
* MessageChannel

```js
setTimeout(() => console.log('task'), 0);
```

> `0ms` does **not** mean immediate   it means *enqueue after current turn*.

---

## 6. Microtasks (The Priority Queue)

Microtasks have **higher priority** than macrotasks.

### Microtask Sources

* `Promise.then / catch / finally`
* `queueMicrotask`
* `MutationObserver`

```js
Promise.resolve().then(() => console.log('microtask'));
```

### Critical Rule

> After **every task**, the engine **drains the entire microtask queue** before moving on.

---

## 7. Deterministic Ordering Example

```js
console.log('start');

setTimeout(() => console.log('timeout'), 0);

Promise.resolve().then(() => console.log('promise'));

console.log('end');
```

### Execution Order

```text
start
end
promise
timeout
```

### Why?

1. Synchronous code runs first
2. Microtasks are flushed
3. Next macrotask executes

---

## 8. Microtask Starvation (A Real Problem)

```js
function loop() {
  Promise.resolve().then(loop);
}
loop();
```

This code:

* Never yields back to the task queue
* Blocks rendering
* Freezes the UI

> Microtasks can **starve the event loop** if abused.

Browsers may introduce heuristics to mitigate this.

---

## 9. Rendering and the Event Loop (Browser-Specific)

In Chrome, rendering typically happens:

```text
Task → Microtasks → Render → Next Task
```

Rendering includes:

* Style recalculation
* Layout
* Paint
* Composite

### requestAnimationFrame

```js
requestAnimationFrame(() => {
  // runs before paint
});
```

`rAF` callbacks run **before rendering**, not as normal tasks.

---

## 10. setTimeout Is Not a Timer

```js
setTimeout(fn, 100);
```

Guarantee:

* Callback will **not run before 100ms**

Non-guarantee:

* Callback may run *much later*

Reasons:

* Busy call stack
* Microtask backlog
* Rendering pressure

---

## 11. V8 vs Runtime Responsibilities

### V8 (JavaScript Engine)

* Parses JavaScript
* Executes code
* Manages heap & GC
* Manages call stack
* Runs microtasks

### Host Environment (Chrome / Node)

* Timers
* I/O
* Event loop
* Task queues
* Rendering

> The event loop is **outside** V8, but V8 cooperates with it.

---

## 12. Promise Resolution Internals (High-Level)

When a promise settles:

1. Reaction jobs are queued as microtasks
2. They run after the current stack clears
3. They may enqueue more microtasks

This creates **depth-first execution** of promise chains.

---

## 13. Node.js vs Browser Event Loop (Brief)

Node.js has **multiple phases**:

* timers
* pending callbacks
* idle/prepare
* poll
* check
* close callbacks

Promises still run in the **microtask queue** after each phase.

The core mental model remains consistent.

---

## 14. Debugging Event Loop Issues

### Symptoms

* UI jank
* Delayed timers
* Promises executing “late”
* Infinite microtask loops

### Tools

* Chrome DevTools Performance tab
* Long task warnings
* `performance.now()`

---

## 15. Final Mental Model (Senior-Level)

> JavaScript executes **one thing at a time**, but schedules *many things precisely*.

* Call stack guarantees atomic execution
* Microtasks guarantee promise ordering
* Tasks guarantee fairness
* Rendering happens between turns

Understanding the event loop means you understand:

* Async bugs
* Performance bottlenecks
* Framework internals
* Browser behavior

---

## 16. One-Line Truth

> The event loop is the **contract between JavaScript and the real world**.

Master this, and async JavaScript becomes predictable, debuggable, and fast.

---

# Garbage Collection in V8

## Why Garbage Collection Exists

JavaScript is a garbage-collected language: developers do not explicitly allocate or free memory. Instead, the engine (V8) automatically reclaims memory that is no longer reachable. This design prioritizes developer productivity and safety, but it introduces complexity in performance and predictability.

At its core, V8 GC answers one question:

> **Which objects are still reachable from the program?**

Anything not reachable is considered garbage.

---

## Mark-and-Sweep (Foundation)

### Reachability

V8 begins from a set of *roots*:

* Global object
* Stack variables
* Closures’ lexical environments
* Active execution contexts

### Algorithm

1. **Mark phase** – Traverse object graph starting from roots and mark all reachable objects.
2. **Sweep phase** – Iterate through heap and reclaim unmarked memory.

### Key Insight

Mark-and-sweep does **not** compact memory → leads to fragmentation if used alone.

---

## Generational Garbage Collection

### Empirical Observation

Most objects die young.

### Heap Structure

* **Young Generation (New Space)**

  * Nursery / semi-spaces
  * Fast allocation
  * Frequent minor GCs (Scavenge)
* **Old Generation (Old Space)**

  * Long-lived objects
  * Less frequent, more expensive GCs

### Minor GC (Scavenge)

* Copy live objects from one semi-space to another
* Compacts memory automatically
* Extremely fast

### Promotion

Objects surviving multiple scavenges are promoted to Old Space.

---

## Incremental & Concurrent GC

### Problem

Stop-the-world GC causes visible jank.

### Incremental GC

* Breaks marking into small slices
* Interleaves GC work with JS execution
* Uses write barriers to maintain correctness

### Concurrent GC

* Marking runs on background threads
* JS continues executing in parallel
* Final sweeping may still require short pauses

### Practical Impact

* Lower latency
* More predictable frame times

---

# Async/Await Desugaring

## Async Functions Are Promise Factories

```js
async function foo() {
  return 42;
}
```

Equivalent to:

```js
function foo() {
  return Promise.resolve(42);
}
```

---

## Await Is Suspension, Not Blocking

```js
async function example() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}
console.log('C');
example();
```

Execution order:

```
C
A
B
```

### Desugaring Model

1. Execute synchronously until first `await`
2. Register continuation as a **microtask**
3. Suspend function execution
4. Resume after promise fulfillment

---

## Async/Await and Microtasks

* `await` always queues continuation in microtask queue
* Even `await 5` yields

This explains why async/await integrates perfectly with Promise semantics.

---

# Framework Scheduling: React Fiber vs Event Loop

## The Problem

Large UI updates block the main thread → dropped frames and poor input responsiveness.

---

## React Fiber Model

### Key Idea

Break rendering work into **interruptible units**.

### Scheduling

* Uses cooperative scheduling
* Yields control back to browser between units
* Resumes later

### Relation to Event Loop

* Fiber does *not* replace event loop
* It slices work **within** a single macrotask

### APIs Used

* `MessageChannel`
* `setTimeout`
* `requestIdleCallback` (historically)

---

## Priority Levels

* Immediate (user input)
* User-blocking
* Normal
* Low
* Idle

This allows React to keep input responsive even during heavy renders.

---

# Long Tasks & Web Performance Metrics

## Long Tasks

A **long task** is any task > 50ms on the main thread.

### Why They Matter

* Block input handling
* Delay rendering
* Cause jank

---

## Key Metrics

### TBT (Total Blocking Time)

Sum of blocking portions of long tasks.

### INP (Interaction to Next Paint)

Measures end-to-end input responsiveness.

### FID (First Input Delay)

Delay before browser can process first input.

---

## How Event Loop Affects Metrics

* Long macrotasks delay input events
* Excessive microtasks can starve rendering

---

# AbortController & Cooperative Cancellation

## The Problem

Promises cannot be forcefully canceled.

---

## AbortController Model

```js
const controller = new AbortController();
const signal = controller.signal;

fetch(url, { signal });

controller.abort();
```

---

## How It Works

* `signal` is shared
* APIs listen for `abort` event
* Cancellation is **cooperative**

---

## Cancellation Patterns

### Async Functions

```js
async function task(signal) {
  if (signal.aborted) throw new Error('Aborted');
}
```

### Why This Matters

* Prevents wasted work
* Avoids race conditions
* Essential for real-world async systems

---

## Key Takeaway

JavaScript concurrency is **cooperative, single-threaded, and scheduler-driven**. Mastery requires understanding engines, runtimes, and frameworks as a unified system.
