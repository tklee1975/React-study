import React, { useState } from 'react';


function TestStateCounter() {
  let nonStateCount = 0;
  const [stateCount, setStateCount] = useState(0);  // 0 is the default

  const increment = () => {
    setStateCount(stateCount + 1);
    nonStateCount = nonStateCount + 1;    // nonStateCount always 0 -> 1 

    console.debug("stateCount: " + stateCount);
    console.debug("nonStateCount: " + nonStateCount);
  }

  return (
    <div style={{background:'#aaf', padding:'1rem'}}>
      <div><b>Test State Counter</b></div>
      <div style={{fontSize:'2rem'}}>Count (using State): {stateCount}</div>
      <div style={{fontSize:'2rem'}}>Count (without State): {nonStateCount}</div>
      
      <button onClick={increment}>Click me</button>
      <p>
        Note: State Variable vs Normal Variable 
      </p>
    </div>
  );
}

export default TestStateCounter;
