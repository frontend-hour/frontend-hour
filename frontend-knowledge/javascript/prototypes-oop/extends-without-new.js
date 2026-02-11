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

const user1 = UserCreater('name', 5);

function PaidUserCreater(name, score, balance) {
    let newPaidUser = UserCreater(name, score);
    newPaidUser.balance = balance;
    Object.setPrototypeOf(newPaidUser, paidUserFunctions);
    return newPaidUser;
}

Object.setPrototypeOf(paidUserFunctions, userFunction);

const paidUserFunctions = {
    printBalance: () => {
        console.log(this.balance);
    }
}

const paidUser1 = PaidUserCreater('paidname', 3, 10000);
paidUser1.incrementScore();

newPaidUser = {
    name: 'paidname',
    score: 3,
    balance: 10000,
    __proto__: {
        printBalance: () => {
            console.log(this.balance);
        },
        __proto__: {
            incrementScore: function () {
                this.score += 1;
            },
            printScore: function () {
                console.log(this.score);
            },
            __proto__: {}
        }
    }
}

