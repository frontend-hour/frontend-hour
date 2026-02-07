# JavaScript Prototype Inheritance - A Deep, Conceptual Guide

> This document is written as a **strong textbook-style explanation** of JavaScript's object creation and prototype inheritance model. The goal is not just to show *how* things work, but *why* JavaScript is designed this way, what problems each pattern solves, and how all approaches connect under one mental model.

---

## 1. The Core Problem: Repeating Object Structures

Let us start with the most naive and intuitive way of creating objects.

```js
let user1 = {
    name: 'John',
    score: 3,
    printScore: function () {
        console.log(this.score);
    },
    incrementScore: function () {
        user1.score++;
    }
};

let user2 = {
    name: 'Smith',
    score: 5,
    printScore: function () {
        console.log(this.score);
    },
    incrementScore: function () {
        user2.score++;
    }
};
```

### Problems With This Approach

1. **Code Duplication**
   Every object manually redefines the same methods.

2. **Tight Coupling**
   The method `incrementScore` directly references `user1` or `user2`. This completely breaks reusability.

3. **Scalability Failure**
   Imagine creating 1,000 users. This approach does not scale.

4. **Conceptual Mistake**
   Each object *owns* its methods, even though the behavior is identical.

This forces us to ask:

> Can we separate **data (unique per user)** from **behavior (shared across users)**?

---

## 2. Factory Functions: Automating Object Creation

A natural improvement is to automate object creation using a function.

```js
function createUser(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.printScore = function () {
        console.log(this.score);
    };
    newUser.incrementScore = function () {
        this.score++;
    };
    return newUser;
}

const userA = createUser('John', 2);
const userB = createUser('Alice', 5);
```

### What This Solves

* Removes repetition of object literals
* Makes object creation dynamic
* Correctly uses `this`

### Hidden Problem (Very Important)

Each time `createUser` runs:

* New **function objects** are created
* Memory usage increases unnecessarily

```text
userA.printScore !== userB.printScore
```

Even though the logic is the same, JavaScript stores **separate copies**.

> This is inefficient and conceptually wrong: behavior should be shared.

---

## 3. Introducing Prototypes: Shared Behavior via Delegation

JavaScript does **not** use classical inheritance.
Instead, it uses **delegation through prototypes**.

### The Core Idea

* Objects can **delegate property access** to another object
* That object is called the **prototype**

---

## 4. Object.create(): Manual Prototype Linking

We now extract shared behavior into a separate object.

```js
const userFunctionsStore = {
    printScore: function () {
        console.log(this.score);
    },
    incrementScore: function () {
        this.score++;
    }
};

function createUser(name, score) {
    const newUser = Object.create(userFunctionsStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userC = createUser('John', 99);
const userD = createUser('Smith', 100);
```

### What `Object.create` Actually Does

```text
newUser.__proto__ === userFunctionsStore
```

Visual model:

```text
userC
 ├─ name
 ├─ score
 └─ __proto__ → userFunctionsStore
                      ├─ printScore
                      └─ incrementScore
```

### Property Lookup Algorithm

When you call:

```js
userC.incrementScore();
```

JavaScript:

1. Looks for `incrementScore` on `userC`
2. Not found
3. Moves to `userC.__proto__`
4. Finds the function
5. Executes it with `this = userC`

This is **delegation**, not copying.

---

## 5. The `new` Keyword: Automation of Prototype Wiring

The `new` keyword does **four things automatically**:

1. Creates an empty object
2. Links it to the constructor's `prototype`
3. Binds `this` to the new object
4. Returns the object implicitly

---

## 6. Constructor Functions + Prototype

```js
function CreateUser(name, score) {
    this.name = name;
    this.score = score;
}

CreateUser.prototype.incrementScore = function () {
    this.score++;
};

CreateUser.prototype.printScore = function () {
    console.log(this.score);
};

const userE = new CreateUser('Anna', 42);
```

### What Happens Internally

```js
const userE = {
    name: 'Anna',
    score: 42,
    __proto__: CreateUser.prototype
};
```

And:

```js
CreateUser.prototype = {
    incrementScore: function () { ... },
    printScore: function () { ... }
};
```

This is **identical** in behavior to `Object.create`, but more ergonomic.

---

## 7. ES6 Classes: Syntactic Sugar (Not a New System)

```js
class CreateUser {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    incrementScore() {
        this.score++;
    }

    printScore() {
        console.log(this.score);
    }
}

const userF = new CreateUser('Mark', 88);
```

### Critical Insight

> **Classes do NOT introduce classical inheritance**

Behind the scenes:

```js
CreateUser.prototype.incrementScore
CreateUser.prototype.printScore
```

Classes are **syntax sugar** over the prototype system.

---

## 8. Final Mental Model (Most Important Section)

### JavaScript Has ONLY Objects

* No real classes
* No copying of methods
* Only **objects linked to objects**

### Inheritance in JS Means

> "If you don’t find it here, look over there."

That is all.

---

## 9. One-Line Summary

* Factory functions create objects
* Prototypes share behavior
* `Object.create` wires delegation
* `new` automates wiring
* `class` hides the prototype syntax

But **everything** is prototype delegation.

---

## 10. If You Truly Understand This, You Understand JavaScript

Once prototypes click:

* `this` becomes obvious
* `class` becomes transparent
* Performance decisions become clear
* Framework internals make sense

This is the heart of JavaScript.
