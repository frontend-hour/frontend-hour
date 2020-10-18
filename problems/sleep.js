// Problem

function printNames(names) {
    names.forEach(name => {
        setTimeout(() => {
            console.log(name);
        }, 3000);
    });
}
// 1ms - callback queue - parrot callback - 3001
// 2ms - callback queue - crow callback - 3002
// 3ms - callback queue - sparrow callback - 3003
// 4ms - callback queue - falcon callback - 3004
// 5ms - callback queue - hornbill callback - 3005

printNames(['parrot', 'crow', 'sparrow', 'falcon', 'hornbill']);


// Solution

const sleep = ms => new Promise((resolve) => { setTimeout(resolve, ms); });

async function printNames(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
        await sleep(3000);
    }
}

printNames(['parrot', 'crow', 'sparrow', 'falcon', 'hornbill']);