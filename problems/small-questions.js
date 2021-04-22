// Coercion
console.log(2 + '2'); // 22
console.log(2 - '2'); // 0


// remove duplicates
let nums = [1, 2, 3, 3];
console.log([...new Set(nums)]);

// block scope in ES5
let func = function () {
    (function iife() {
        let l = 'let';
        var v = 'var';
    })();

    console.log(v); // undefined
    console.log(l); // undefined
}

// coercion
console.log(5 < 6 < 7); // true ((5 < 6) < 7)
console.log(7 > 6 > 5); // false ((7 > 6) > 5)

// arguments in arrow function
let a = () => arguments;
console.log(a('FrontendHour'));

let b = (...args) => {
    console.log(args);
}

// some syntax problem
let x = function () {
    return
    {
        message: 'FrontendHour'
    }
}

x();

// no modification on Object
var profile = {
    name: 'FronendHour',
    phone: 9876543211
}
profile.age = 2;

Object.freeze(profile); // freezes entire object
Object.seal(profile); // no new properties can be added

Object.defineProperty(profile, 'email', {
    value: 'frontendhour@feh.com',
    writable: false
});

console.log(Math.max()); // -Infinity

console.log(Compare({ a: 2, b: 3 }, { a: 2, b: 3, c: 4 }, ['a', 'b']));
function Compare(obj1, obj2, args) {
    for (let i = 0; i < args.length; i++) {
        if (obj1[args[i]] !== obj2[args[i]])
            return false;
    }
    return true;
}
