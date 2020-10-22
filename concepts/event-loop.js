// v8 - Browser features (DOM, Timer, Console, Network)
function foo() {
    throw new Error('Error from foo');
}

function bar() {
    foo();
}

function baz() {
    bar();
}

// baz();

function fooo() {
    return fooo();
}

// fooo();

function display(data) {
    console.log(data);
}

function printHello() {
    console.log('Hello');
}

function blockSomeTime() {
    for (let i = 0; i < 1000000; i++) {
        let a = 9;
        let b = 8;
        let c = a + b + i;
    }
}

setTimeout(printHello, 0);

const futureData = fetch('https://jsonplaceholder.typicode.com/todos/1');
futureData.then(display);

  blockSomeTime();
  console.log('Me first');