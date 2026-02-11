let arr = [1, 2, 3, 4];
console.log(arr[0]);

// let [variable1, variable2, variable3, ..., variableN] = array;

var [first, second, third, fourth] = arr;

console.log(first);
console.log(fourth);

var complexArray = [1, [[2], 3]];
var [foo, [[bar], baz]] = complexArray;

console.log(foo);
console.log(bar);
console.log(baz);

var [, , misthird] = ["foo", "bar", "baz"];
console.log(`misthird = ${misthird}`);

var [first, ...tail] = [1, 2, 3, 4];
console.log('tail = ', tail);

var [missing = 'I have value'] = [];
console.log('missing = ', missing);

function* generators() {
    var a = 0;
    var b = 1;

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

var [first, second, third, fourth, fifth, sixth] = generators();
console.log('sixth = ', sixth);

// Object Destructing

var { name: nameA } = { name: 'Raghu' };
console.log('nameA = ', nameA);

var { foo, bar } = { foo: 'FooVal', bar: 'BarVal' };

console.log(foo, bar);

var complexObj = {
    arrayProps: [
        "raghu",
        { second: "Chaitu" }
    ]
}

var { arrayProps: [first, { second }] } = complexObj;

console.log(first, second);


// Wesbos Tips

// Since Array are objects we can object 
const bikes = ['bianchi', 'miele', 'miyata', 'benotoo', 'panasonic'];
// Grabbing first and last items in array with Object destructuring
const { length, 0: first, [length - 1]: last } = bikes;
console.log(first, last);

