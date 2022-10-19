import React, { useEffect, useState } from "react";

function SecondTimer() {
  const [second, setSecond] = useState(0); // 0 is the default

  useEffect(() => {
    setTimeout(() => {
      setSecond(second + 1); 
    }, 1000);   // this modify state variable of second after 1 second
  }, [second]); // monitor the state variable of second

  return (
    <div style={{ padding: "2rem" }}>
      <div>
        <b>Timer</b>
      </div>
      <div style={{ fontSize: "2rem" }}>{second}</div>
      <div style={{ fontSize: "0.8rem" }}>sec</div>

      <p>Note: Timer for seconds</p>
    </div>
  );
}

export default SecondTimer;
