function debounce(fn, ms) {
    let timeoutId;

    return function() {
        if(timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            fn.apply(this, arguments);
        }, ms);
    }
}

function printName(name) {
    console.log(name);
}

const throttlePrintName = debounce(printName, 1000);

function keyUpEvent(e) {
    throttlePrintName(e.target.value)
}