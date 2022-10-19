# Notes about State and Lifecycle

- State can be mutable
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
