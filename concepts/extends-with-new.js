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

function PaidUserCreator(name, score, balance) {
    UserCreater.call(this, name, score); //side effects
    this.balance = balance;
}

PaidUserCreator.prototype = Object.create(UserCreater);

PaidUserCreator.prototype.printBalance = function () {
    console.log(this.balance);
}

const user2 = new PaidUserCreator('somename', 5, 9000);