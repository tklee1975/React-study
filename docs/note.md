# Reference 


## Books 
- React Up & Running [https://drive.google.com/drive/u/0/folders/1xDGr9X5-1XrCDL1-grdvXAWwzDjnFAvB]

- https://drive.google.com/drive/u/0/folders/1xDGr9X5-1XrCDL1-grdvXAWwzDjnFAvB

## Keys Notes 
### Render & createElement 
Making the Virtual DOM 
```javascript 
let element = React.createElement('h1', null', 'content');
ReactDom.render( 
    element, document.getElementById('app')
)
```

### JSX 
- Shorthand of createElement ... 
- Reference:
  - https://facebook.github.io/jsx/
- Using JSX, it need you to translate 
  - JSX -> JS + HTML 
- Notes: Mainly use JSX unless you know what're you doing 
- 
### Component 

#### Simplest Component 
- return an string 
- return an element 
- Sample Codes:
```JS
const MyComponent = function() {
    return 'I am Component';
};

const MyComponent = function() {
return React.createElement('span', null, 'I am Component');
};
```

#### With JSX 
```JS
const MyComponent = function() {
    return <span>I am so custom</span>;
};

ReactDOM.render(
    <MyComponent />,
    document.getElementById('app')
);
```

#### Common Way
````JS
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        JSX Code 
      </div>
    );
  }
}
````