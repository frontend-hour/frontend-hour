function throttle(fn, time) {
    let timeout;

    return function () {
        if(timeout) {
            return;
        }

        timeout = setTimeout(() => {
            fn.apply(this, arguments);
            timeout = null;
        }, time);
    }
}

function printName(name) {
    console.log(name);
}

const throttlePrintName = throttle(printName, 1000);

// So, Throttling enforces a maximum number of times a function can be called over time. As in “execute this function at most once every 1000 milliseconds.”

function keyUpEvent(e) {
    throttlePrintName(e.target.value)
}


