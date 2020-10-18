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

function keyUpEvent(e) {
    throttlePrintName(e.target.value)
}

