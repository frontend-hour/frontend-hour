let user1 = {
    name: 'raghu',
    score: 3,
    printScore: function() {
        console.log(this.score);
    },
    incrementScore: function() {
        user1.score++;
    }
}
let user2 = {
    name: 'raghu',
    score: 3,
    printScore: function() {
        console.log(this.score);
    },
    incrementScore: function() {
        user2.score++;
    }
}
let user3 = {
    name: 'raghu',
    score: 3,
    printScore: function() {
        console.log(this.score);
    },
    incrementScore: function() {
        user3.score++;
    }
}

/*- --------------------------------------*/

function createUser(name, score) {
    var newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.printScore = function() {
        console.log(this.score);
    }
    newUser.incrementScore = function() {
        this.score++;
    }
    return newUser;
}

let user5 = createUser('raghu', 2);
let user4 = createUser('myname', 2);

/*- --------------------------------------*/

function createUser(name, score) {
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

/*- --------------------------------------*/

function createUser(name, score) {
    this.name = name;
    this.score = score;
}
createUser.prototype.printScore = function() {
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
        incrementScore: function() {
            this.score++;
        },
        printScore: function() {
            console.log(this.score);
        }
    }
}