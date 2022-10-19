# Notes about Handling Events

- Similar to DOM Events e.g onClick
- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.
- Need to bind the function to the class
  - `this.handleClick = this.handleClick.bind(this);`
- Or using arrow function
  - `handleClick = () => { ... }`
- Comparsion

  ```html
  <button onclick="activateLasers()">Activate Lasers</button>
  ```

  ```JSX
  <button onClick={activateLasers}>
  Activate Lasers
  </button>
  ```
- Prevent Default 
  - html: return false 
  - jsx: use e.preventDefault()
  ```function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
  ```


- Main Lifecycle methods
  - `componentDidMount()`
  - `componentWillUnmount()`
  - `constructor(props)`
- Different way to set

  ```js
  this.state = {
    date: new Date(),
  };
  ```

  ```js
  this.setState((state, props) => ({
    counter: state.counter + props.increment,
  }));
  ```
