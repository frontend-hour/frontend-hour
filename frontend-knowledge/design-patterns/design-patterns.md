
- Here we go with design patterns in short explaination. 

## Design Patterns

1. Creational Design Pattern
2. Structural Design Pattern
3. Behaviour Design Pattern

### Creational Design Pattern 

- Deal with the creation of new instances of an Object. 

1. Constructor Design pattern 
    - Used to create new objects with there own object scope.
2. Module Pattern 
    - Bundle of like methods in an IIFE
3. Factory pattern 
    - A pattern used to simplify object creation
4. Singleton Pattern 
    - A single pattern limits the number of instances of a particular object to just one.
5. Revealing module 
    - This pattern is the same concept as the module pattern in that it focuses on public & private methods. 
    - The only difference is that the revealing module pattern was engineered as a way to ensure that all methods and variables are kept private until they are explicitly exposed; usually through an object literal returned by the closure from which it’s defined. Personally, I like this approach for vanilla JavaScript as it puts a clear emphasis on both the intent of the developer and the module itself.

### Structural Design Pattern 

- Deal with the relationship of Objects by Extending and Simplyfying functionality. 
- Mainly concerned with how objects are madeup and Simplify relationships between objects. 

1. Decorator Pattern 
    - Extends the functionality (adds new functionality to an existing objects)
2. Facade & Flyweight patterns 
    - Simplify the functionality. 

* Facade Pattern 
    - Used to provide a simplified interface to a complicated system. 
    - Hide chaos from us and simplifies the interface.
    - Jquery is the most well known implementation of Facade pattern.

* Flyweight Pattern 
    - Used to conserve memory by taking portions of an object and sharing that across objects. 

#### Summary 
- A patterns that are intended to change or at least alter the view of an object. 
* Creational Design patterns - creating new instances of objects
* In Structural Design Patterns - we are dealing with altering the composition of objects. 


### Behavioural Design Patterns 

- This patterns breakout of that single object mentality and start concerning themselves with interactions between objects. 

1. Observer pattern 
    - Allows a collection of objects to watch an object and be notified of changes.
2. Mediator Pattern 
    - Controlls communication between objects so neither objects has to be coupled to the others. 
3. Command Pattern 