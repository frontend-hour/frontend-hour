# Prototypes & Object-Oriented JavaScript

Understanding JavaScript's prototype-based inheritance model and Object-Oriented Programming (OOP) patterns.

## Key Concepts
- **Prototype Chain**: How objects inherit properties and methods from other objects.
- **ES6 Classes**: Modern syntax for creating classes and inheritance.
- **Constructor Functions**: The traditional way of creating objects before classes.

## Files
- **[jsprototype.md](jsprototype.md)**: A deep conceptual guide to Prototype Inheritance.
- **[OOJS.js](OOJS.js)**: Examples of Object-Oriented JavaScript patterns.
- **[prototype.js](prototype.js)** & **[prototype-chain.js](prototype-chain.js)**: Demonstrations of the prototype chain.
- **[class-extends.js](class-extends.js)**: Usage of `class` and `extends`.
- **[extends-with-new.js](extends-with-new.js)** / **[extends-without-new.js](extends-without-new.js)**: Inheritance patterns.
- **[without-new.js](without-new.js)**: Handling function calls without the `new` keyword.

## Deep Dive

### Prototype Chaining

JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

```javascript
function createUser(name, score) {
    // 1. Create a new object that delegates to userFunctionsStore
    var newUser = Object.create(userFunctionsStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionsStore = {
    printScore: function() {
        console.log(this.score);
    },
    incrementScore: function() {
        this.score++;
    }
}

let user6 = createUser('raghu', 99);
let user7 = createUser('raghu7', 99);

user6.incrementScore(); // Looks for incrementScore on user6, fails. Looks on userFunctionsStore, finds it!
```

### Ways to create objects
1. With `Object.create()`
2. With a constructor (`new` keyword)
3. With a `class` keyword
