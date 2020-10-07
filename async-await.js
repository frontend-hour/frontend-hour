var promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (false) {
            resolve("Frontend Hour");
        }
        else {
            reject(Error("It broke"));
        }
    }, 2000);
});

promise.then(function (result) {
    console.log(result); // "Stuff worked!"
}).catch((err) => {
    console.log(err);
});

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

function *createFlow() {
    console.log('Me First');
    const data = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data);
    yield data.json();
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();
console.log('Me Second');
let jsonData = {};

futureData.value.then((response) => {
    jsonData = returnNextElement.next(response);
    jsonData.value.then(json => console.log(json));
});

async function createFlow() {
    console.log('Me First Async');
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data);
    const json = await data.json();
    console.log(json);
}

createFlow();