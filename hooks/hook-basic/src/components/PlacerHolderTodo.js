import React, { useState } from 'react';


function PlacerHolderTodo (props) {
  const mockTodo = {
    "userId": 1,
    "id": 1,
    "title": "Study React Hook",
    "completed": false
  };

  const [data, setData] = useState(mockTodo);  // 0 is the default

  useState(() => {
    let idStr = props.todoID || "1";

    // fetch data from API
    // setData(data);
    fetch(`https://jsonplaceholder.typicode.com/todos/${idStr}`)
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log(json)
      });
    }
  );


  // Return the JSX of a TODO Card 
  return (
    <div style={{ padding: "2rem", fontSize: '1.1rem', background:'#ff9' }}>
      <div>
        <b>{data.title}</b>
      </div>
      <div style={{fontSize: '0.8rem'}}>
        <b>Completed:</b> {data.completed ? 'Yes' : 'No'}
      </div>
    </div>
  );
}

export default PlacerHolderTodo;
