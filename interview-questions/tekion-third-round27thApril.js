// BIND POLYFILL

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
