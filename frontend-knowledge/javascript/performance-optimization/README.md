# Performance Optimization

Techniques to improve JavaScript performance and user experience.

## Key Concepts
- **Debouncing**: Ensuring a function is not called too frequently (e.g., search input).
- **Throttling**: Ensuring a function is called at most once in a specified time period (e.g., scroll events).

## Files
- **[debounce.js](debounce.js)**: Implementation of a debounce function.
- **[throttle.js](throttle.js)**: Implementation of a throttle function.

## Deep Dive

### Throttle

Throttling enforces a maximum number of times a function can be called over time. As in “execute this function at most once every 1000 milliseconds.”

```javascript
function throttle(fn, time) {
    let timeout;
    return function () {
        if (timeout) {
            return;
        }
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
            timeout = null;
        }, time);
    }
}
```

### Debounce

Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. As in “execute this function only if 1000 milliseconds have passed without it being called.”

```javascript
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
```
