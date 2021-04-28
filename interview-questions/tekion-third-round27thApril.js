
// call apply

let sqaure = {
    x: 4,
    getArea: function() {
        return this.side * this.side;
    }
}

let sqaure2 = {
    side: 5
}

sqaure.getArea.call(sqaure2)

// add parameters to above

let sqaure = {
    x: 4,
    getArea: function(a, b) {
        return this.side * a * b;
    }
}

let sqaure2 = {
    side: 5
}

sqaure.getArea.call(sqaure2, 2 ,3);

// BIND POLYFILL

Function.prototype.mybind = function () {
    const context = this;
    const boundContext = arguments[0];
    const boundArguments = Array.from(arguments).slice(1);

    if (typeof context !== 'function') {
        throw new TypeError('Not a valid function.')
    }
    return function () {
        const allArgs = boundArguments.concat(Array.from(arguments));
        context.apply(boundContext, allArgs);
    }
}

let sqaureBind = sqaure.getArea.bind(sqaure2);

// Debounce 
function logName(name) {
    console.log(name);
}

let debounceLogname = debounce(logName, 1000);

debounceLogname('a');
debounceLogname('ab');
debounceLogname('abc');


function debounce(fn, ms) {
    let timeoutId;

    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn.apply(this, arguments);
        }, ms);
    }
}
