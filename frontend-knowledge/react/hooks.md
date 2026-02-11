
#### Why React hooks was introduced?

- One reason to introduce hooks was the complexity in dealing with *this* keyword inside class components. If not handled properly, this will take some other value. That will result in breaking lines like *this.setState()* and other event handlers. Using hooks, we avoid that complexity when working with functional components. 

- Class components do not minify very well and also make **hot reloading unreliable.** That is another inspiration to bring hooks.

- Another reason is that, there is no specific way to reuse stateful component logic. Even though HOC and render props patterns address this problem, that asks for modifying the class component code. **Hooks allow to share stateful logic without changing the component hierarchy.**

- Fourth reason is, in a complex class component, related code are scattered in different lifecycle methods. Example, in case of a data fetching, we do that mainly in componentDidMount() and componentDidUpdate(). Another example is, in case of event listeners, we use componentDidMount() to bind an event and componentWillUnmount() to unbind. **Hooks instead helps to place related code together.**