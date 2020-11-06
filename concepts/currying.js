function sum(a, b, c) {
    return a + b + c;
}

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

let addition = sum(1)(2)(3);

function avg(...n) {
    let total = 0;
    for (let i = 0; i < n.length; i++) {
        total = total + n[i];
    }
    return total / n.length;
}

function curryFun(fn, ...n) {
    return function (...m) {
        return fn.apply(this, n.concat(m));
    }
}

let averageVal = curryFun(avg, 1, 2, 3, 4);

console.log(averageVal(5, 6, 7, 8));