### Lifecycle methods equivalent in Hooks

###### If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

-  you can mimic these lifecycle method from class component in a functional components.

-  Code inside componentDidMount run once when the component is mounted. useEffect hook equivalent for this behaviour is

```js
    useEffect(() => {
    // Your code here
    }, []);
``` 
- Notice the second parameter here (empty array). This will run only once.

- **Without the second parameter** the useEffect hook will be called on every render of the component which can be dangerous.
```js
    useEffect(() => {
    // Your code here
    });
```

**componentWillUnmount** is use for cleanup (like removing event listeners, cancel the timer etc). Say you are adding a event listener in **componentDidMount** and removing it in **componentWillUnmount** as below.
```js
    componentDidMount() {
        window.addEventListener('mousemove', () => {});
    }
    
    componentWillUnmount() {
        window.removeEventListener('mousemove', () => {});
    }
```

###### Hooks equivalent of above code will be
```js
useEffect(() => {
    window.addEventListener('mousemove', () => {});

    return () => {
        window.removeEventListener('mousemove', () => {});
    }
}, []);
```