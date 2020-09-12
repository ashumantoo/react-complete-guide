import React, { useState } from 'react';

function UseStateComp4() {
  const [lists, setList] = useState([]);
  const addNumber = () => {
    setList([...lists, {
      id: lists.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  };

  return (
    <div>
      <h3>useState hook with Array</h3>
      <button onClick={addNumber}>Add Number</button>
      <ul>
        {lists.map((list, index) => (
          <li key={index}>{list.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseStateComp4;
