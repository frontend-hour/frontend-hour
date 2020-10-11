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


class PaidUserCreator extends UserCreater {
    constructor(name, score, balance) {
        super(name, score);
        this.balance = balance;
    }

    incrementBalance() {
        console.log(this.balance);
    }
}

const user2 = new PaidUserCreater('user2', 3);