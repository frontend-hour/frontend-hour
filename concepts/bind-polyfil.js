// Case 1 - No arguments

const boundfn = fn.bind(ctx);

const city = {
    name: 'London',
    printCityLove: function () {
        console.log(`I love ${this.name} City.`)
    }
}
setTimeout(city.printCityLove.bind(city), 1000);


// case 2 - Passing arguments 

const boundfn1 = fn.bind(ctx, arg1, arg2, arg3)

const city1 = {
    name: 'london',
    printCityLove: function (personName) {
        console.log(`${personName} loves ${this.name} city`);
    }
}

setTimeout(city.printCityLove.bind(city, 'Raghu'), 100)



if (!Function.prototype.bind) {
    Function.prototype.bind = function ([first, ...rest]) {
        const context = this;
        // const boundContext = arguments[0];
        // const boundArgs = Array.from(arguments).slice(1);
        // const boundArgs = arguments;
        // boundArgs.shift();
        return function (...args) {
            const allArgs = rest.concat(args);
            context.apply(first, allArgs);
        }
    }
}



if (!Function.prototype.bind) {
    Function.prototype.bind = function () {
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
}
