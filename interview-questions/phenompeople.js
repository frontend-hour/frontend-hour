// Random questions List

let questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];

function generateRandomQuestionOrder(list) {
    let randomList = [];

    while (randomList.length !== list.length) {
        let randomNumber = Math.floor(Math.random() * 10);
        if (!randomList.includes(list[randomNumber])) {
            randomList.push(list[randomNumber]);
        }
    }
    return randomList;
}

console.log(generateRandomQuestionOrder(questions));

// Group times based on date
let input = [
    {
        date: '24 th July',
        time: '1-2'
    },
    {
        date: '24 th July',
        time: '2-3'
    },
    {
        date: '25 th July',
        time: '1-2'
    },
    {
        date: '25 th July',
        time: '1-2'
    },
    {
        date: '25 th July',
        time: '2-3'
    },
    {
        date: '26 th July',
        time: '1-2'
    }
];

function getTimesOfDay(list) {
    let temp = {};
    for (let i = 0; i < list.length; i++) {
        if (!temp[list[i].date]) {
            temp[list[i].date] = [];
        }
        if (temp[list[i].date]) {
            temp[list[i].date].push(list[i].time);
        }
    }
    console.log(temp);
}

getTimesOfDay(input);


let obj = {
    name: 'my-name',
    sayName: function () {
        return this.name;
    }
}

obj.sayName(); // ? my-name
obj.sayName.call({ name: 'new-name' }); // new-name

let newObj = obj.sayName;
var name = 'Tim';

newObj(); // Tim

// ------------------------------------------------------------
let arr = [1, 2, [4, 5], 4, 5, 6, [1, 2, [3, 4, 6, [7, 8, 8]]]];

