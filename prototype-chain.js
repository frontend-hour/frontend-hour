
// Problem 

let user1 = {};
user1.name = "raghu";
user1.score = 0;
user1.incrementScore = function () {
    this.score += 1;
}
user1.printScore = function () {
    console.log(this.score);
}

let user2 = {};
user2.name = "raghu";
user2.score = 0;
user2.incrementScore = function () {
    this.score += 1;
}
user2.printScore = function () {
    console.log(this.score);
}

// Solution

function UserCreater(name, score) {
    let newUser = Object.create(userFunction);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

const userFunction = {
    incrementScore: function () {
        this.score += 1;
    },
    printScore: function () {
        console.log(this.score);
    }
}

const user1 = UserCreater('mc', 9);
const user2 = UserCreater('raghu', 19);

user1.incrementScore();

// Solution using new keyword

function UserCreater(name, score) {
    this.name = name;
    this.score = score;
}

UserCreater.prototype.incrementScore = function () {
    this.score++;
}

UserCreater.prototype.printScore = function () {
    console.log(this.score);
}

const user1 = new UserCreater('user1', 4);
const user2 = new UserCreater('user2', 3);

// Solution using class keyword

class UserCreater {
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

const user1 = new UserCreater('user1', 4);
const user2 = new UserCreater('user2', 3);



