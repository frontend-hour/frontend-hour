let user1 = {
    name: 'raghu',
    score: 3,
    printScore: function () {
        console.log(this.score);
    },
    incrementScore: function () {
        user1.score++;
    }
}
let user2 = {
    name: 'raghu',
    score: 3,
    printScore: function () {
        console.log(this.score);
    },
    incrementScore: function () {
        user2.score++;
    }
}
let user3 = {
    name: 'raghu',
    score: 3,
    printScore: function () {
        console.log(this.score);
    },
    incrementScore: function () {
        user3.score++;
    }
}

// Instead of manually creating objects we created function called createUser
// This function will return the object template with same properties and methods with different data

/*- --------------------------------------*/

function createUser(name, score) {
    var newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.printScore = function () {
        console.log(this.score);
    }
    newUser.incrementScore = function () {
        this.score++;
    }
    return newUser;
}

let user5 = createUser('raghu', 2);
let user4 = createUser('myname', 2);

/*- --------------------------------------*/
// But the problem here is the methods that are being added to user objects is same for all users when created with createUser function
// This will take extra unnecessary memory for users object.
// So, in the next solution we will separate the common methods accross user objects created using createUser function
// And separated common methods are referenced in the objects.
// For referencing the commong methods we are using Object.create, this will point the newUser Object __proto__ to "userFunctionStore"
// But the problem here is every time we are creating newUser object and adding properties.

function createUser(name, score) {
    var newUser = Object.create(userFunctionsStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunctionsStore = {
    printScore: function () {
        console.log(this.score);
    },
    incrementScore: function () {
        this.score++;
    }
}

let user6 = createUser('raghu', 99);
let user7 = createUser('raghu7', 99);

// All this work is done simply by using new keyword
// new keyword when used before calling the createUser this will automate the process of creating newUser Object and adding properties and method reference.
/*- --------------------------------------*/

function createUser(name, score) {
    this.name = name;
    this.score = score;
}
createUser.prototype.printScore = function () {
    this.score++;
}

let user8 = new createUser('name', 99);
let user9 = new createUser('name8', 99);

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

let user9 = new CreateUser('nnnn', 99);

user9 = {
    name: 'nnnn',
    score: 99,
    __proto__: {
        incrementScore: function () {
            this.score++;
        },
        printScore: function () {
            console.log(this.score);
        }
    }
}
