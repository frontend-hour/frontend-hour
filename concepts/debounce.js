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

const debouncePrintName = debounce(printName, 1000);

//So, Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in “execute this function only if 1000 milliseconds have passed without it being called.”

function keyUpEvent(e) {
    debouncePrintName(e.target.value)
}
