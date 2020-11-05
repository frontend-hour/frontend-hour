// ------------- Module Pattern ------------- 

const myModule = (function () {

    const privateVariable = 'Hello World';

    function privateMethod() {
        console.log(privateVariable);
    }
    return {
        publicMethod: function () {
            privateMethod();
        }
    }
})();
myModule.publicMethod();

//-------------  Revealing Module Pattern ------------- 

const myRevealingModule = (function () {

    let privateVar = 'Peter';
    const publicVar = 'Hello World';
    function privateFunction() {
        console.log('Name: ' + privateVar);
    }

    function publicSetName(name) {
        privateVar = name;
    }
    function publicGetName() {
        privateFunction();
    }
    /** reveal methods and variables by assigning them to object     properties */
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };
})();
myRevealingModule.setName('Mark');
// prints Name: Mark
myRevealingModule.getName();

// -------------  ES6 Modules ------------- 

// importing multiple items
import { sum, multiply } from './utils.js';
console.log(sum(3, 7));
console.log(multiply(3, 7));

import * as utils from './utils.js';



// ------------- Singleton Pattern ------------- 

let instance = null;
function User() {
    if (instance) {
        return instance;
    }
    instance = this;
    this.name = 'Peter';
    this.age = 25;

    return instance;
}

const user1 = new User();
const user2 = new User();
// prints true
console.log(user1 === user2);


// Singletons can also be implemented using the module pattern. 
const singleton = (function () {
    let instance;

    function init() {
        return {
            name: 'Peter',
            age: 24,
        };
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})();

const instanceA = singleton.getInstance();
const instanceB = singleton.getInstance();
// prints true
console.log(instanceA === instanceB);

// ------------- Factory Pattern ------------- 

class Car {
    constructor(options) {
        this.doors = options.doors || 4;
        this.state = options.state || 'brand new';
        this.color = options.color || 'white';
    }
}
class Truck {
    constructor(options) {
        this.doors = options.doors || 4;
        this.state = options.state || 'used';
        this.color = options.color || 'black';
    }
}
class VehicleFactory {
    createVehicle(options) {
        if (options.vehicleType === 'car') {
            return new Car(options);
        } else if (options.vehicleType === 'truck') {
            return new Truck(options);
        }
    }
}

// Usuage
const factory = new VehicleFactory();
const car = factory.createVehicle({
    vehicleType: 'car',
    doors: 4,
    color: 'silver',
    state: 'Brand New'
});
const truck = factory.createVehicle({
    vehicleType: 'truck',
    doors: 2,
    color: 'white',
    state: 'used'
});
// Prints Car {doors: 4, state: "Brand New", color: "silver"}
console.log(car);
// Prints Truck {doors: 2, state: "used", color: "white"}
console.log(truck);



// ------------- Decorator Pattern ------------- 
function Car(name) {
    this.name = name;
    // Default values
    this.color = 'White';
}


// Creating a new Object to decorate
const tesla = new Car('Tesla Model 3');

// Decorating the object with new functionality
tesla.setColor = function (color) {
    this.color = color;
}
tesla.setPrice = function (price) {
    this.price = price;
}

tesla.setColor('black');
tesla.setPrice(49000);
// prints black
console.log(tesla.color);



// More Pratical example of Decorator Pattern


// Objects depends on price
class Car {
}
class CarWithAC {
}
class CarWithAutoTransmission {
}
class CarWithPowerLocks {
}
class CarWithACandPowerLocks {
}

class Car {
    constructor() {
        // Default Cost
        this.cost = function () {
            return 20000;
        }
    }
}
// Decorator function
function carWithAC(car) {
    car.hasAC = true;
    const prevCost = car.cost();
    car.cost = function () {
        return prevCost + 500;
    }
}

// Decorator function
function carWithAutoTransmission(car) {
    car.hasAutoTransmission = true;
    const prevCost = car.cost();
    car.cost = function () {
        return prevCost + 2000;
    }
}
// Decorator function
function carWithPowerLocks(car) {
    car.hasPowerLocks = true;
    const prevCost = car.cost();
    car.cost = function () {
        return prevCost + 500;
    }
}

const car = new Car();
console.log(car.cost());
carWithAC(car);
carWithAutoTransmission(car);
carWithPowerLocks(car);