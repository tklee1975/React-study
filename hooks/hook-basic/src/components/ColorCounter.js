import React, { useState } from 'react';


function ColorCounter() {
  const [count, setCount] = useState(0);  // 0 is the default

  const bgColors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'black', 'white'];

  const increment = () => {
    setCount(count + 1);    
  }

  const counterBg = () => {
    return bgColors[count % bgColors.length];
  }
  
  const isDarkColor = (color) => {
    return ['black', 'blue', 'green', 'purple'].includes(color);
    // color === 'black' || color === 'blue' || color === 'purple';
  }

  const textColor = () => {
    return isDarkColor(counterBg()) ? 'white' : 'black';
  }

  return (
    <div onClick={increment} style={{background:counterBg(), color:textColor(), padding:'1rem', userSelect: 'none'}}>
      <div><b>Color Counter</b></div>
      <div style={{fontSize:'2rem'}}>{count}</div>
      
      {/* <button onClick={increment}>Click me</button> */}
      <p>
        Note: Background change with count
      </p>
    </div>
  );
}

export default ColorCounter;
