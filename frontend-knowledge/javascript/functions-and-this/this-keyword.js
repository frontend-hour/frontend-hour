var firstName = 'Malladi';
var lastName = 'Chaitanya';

var personObj = {
    firstName: 'Raghu',
    lastName: 'Reddy',
    getFullName: () => {
        return this.firstName + ' ' + this.lastName;
    }
}

let newFunc = personObj.getFullName;
console.log(newFunc());
console.log(personObj.getFullName());
console.log(personObj.getFullName.call(window));
console.log(newFunc.bind(personObj)());


var name = 'Chaitanya';
var age = 10;

var user = {
    name: 'malladi',
    age: 12,
    printDetails1: function () {
        return this.name + ' ' + this.age;
    },
    printDetails2: () => {
        return this.name + ' ' + this.age;
    }
};

console.log(user.printDetails1());
console.log(user.printDetails2());


// 1.Function invocation
// 2.Method invocation
// 3.Constructor invocation


function log() {
    console.log(this);
}

log();

let user = {
    name: 'raghu',
    print: function() {
        console.log(this.name);
    }
}
user.print();


function createUser(name, age) {
    this.name = name;
    this.age = age;
}

createUser.prototype.printName = function() {
    function log() {
        console.log(this.name + ' ' + this.age);
    }
    log();
}


let user1 = new createUser('raghu', 5);
user1.printName();


//Function Invocation this scope
// In arrow funtions this refer to the parents this (where it was born)
// Unlike the traditional function which point to window


// method invocation this scope
// traditional methods 'this' point to its object scope.
// Incase of arrow function - TBD


// TBD for arrow function constructor invocation



