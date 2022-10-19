import React, { useEffect, useState } from "react";

function AnotherTimer() {
  const [second, setSecond] = useState(0); // 0 is the default

  useEffect(() => {
    let timer = setInterval(() => {
      setSecond(second => second + 1);  // ken: this get the updated version of second 
    }, 1000);   // this modify state variable of second after 1 second

    return () => {
      clearTimeout(timer);
    }
  }, []); // just call once s

  return (
    <div style={{ padding: "2rem", background: "#afa" }}>
      <div style={{ fontSize: "2rem" }}>{second}</div>
    </div>
  );
}

export default AnotherTimer;
