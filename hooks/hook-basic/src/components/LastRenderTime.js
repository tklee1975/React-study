import React, { useEffect, useState } from "react";

function LastRenderTime(props) {
  const [lastRenderTime, setLastRenderTime] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    console.log("LastRenderTime: useEffect() called");
    setLastRenderTime(new Date());
  }, [clickCount]);   // just invoke when clickCount changes

  const onClick = () => {
    setClickCount(clickCount + 1);
    // setLastClickTime(new Date());
  };

  const lastRenderTimeInfo = lastRenderTime ? (
    <>
      Last render at <b>{lastRenderTime.toLocaleTimeString()}</b>
    </>
  ) : (
    "??"
  );

  return (
    <div>
      {lastRenderTimeInfo} <br/>
      <button onClick={onClick}>Click to re-render </button>
    </div>
  );
  // return (
  //   <pre>{JSON.stringify(props)}</pre>
  // )
}

export default LastRenderTime;
