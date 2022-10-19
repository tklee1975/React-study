import React, { useState } from 'react';


function BasicCounter() {
  const [count, setCount] = useState(0);  // 0 is the default

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div style={{background:'#aaf', padding:'1rem'}}>
      <div><b>Basic Counter</b></div>
      <div style={{fontSize:'2rem'}}>{count}</div>
      <button onClick={increment}>Click me</button>
      <p>
        Used `useState()`` to create a state variable.
      </p>
    </div>
  );
}

export default BasicCounter;
