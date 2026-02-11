function factorial(n) {
    // n(n-1)(n-2)...(n - (n-1))
    let multi = 1;
    for(let i = n; i >= 1; i--) {
        multi = multi * i; 
    }

    return multi;
}

var factorialRecursion = function() {
    if(n) {
        return n * factorialRecursion(n -1);
    } else {
        return 1;
    }
}

const add2 = (input) => {
    return input + 2;
}

const add3 = (input) => input + 2;

const add4 = input => input + 2;


let r = factorialRecursion(3);
console.log(r);