import React, { useEffect, useState } from "react";

function ClickButton() {
  const [count, setCount] = useState(0); // 0 is the default
  const [lastClickTime, setLastClickTime] = useState(null);
  const [lastRenderTime, setLastRenderTime] = useState(null);
  // const lastClickTime = new Date();

  
  useEffect(() => {
    console.log("useEffect() called");
    document.title = `Counter=${count}`;

    // setLastRenderTime(new Date()); // ken: it trigger a new render, so don't do this
  });

  const onClick = () => {
    setCount(count + 1);
    setLastClickTime(new Date());
  };

  let lastClickTimeStr = lastClickTime && (
    <h3>Last Click at {lastClickTime.toLocaleTimeString()}</h3>
  );

  let lastRenderTimeStr = lastRenderTime && (
    <h3>Last Render at {lastRenderTime.toLocaleTimeString()}</h3>
  );

  return (
    <div style={{ background: "#aaf", padding: "1rem" }}>
      <div>
        <b>Click Button</b>
      </div>

      <button onClick={onClick}>Clicked {count}</button>
      {lastClickTimeStr}
      {lastRenderTimeStr}
      <p>Used `useEffect()`</p>
    </div>
  );
}

export default ClickButton;
