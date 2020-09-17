import React, { useEffect, useState } from 'react'

function UseEffectComp2() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('MOuse event');
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);

    //cleanup
    return () => {
      console.log('Component unmount code');
      window.removeEventListener('mousemove', logMousePosition);
    }
  }, [])  // by passing empty array we are telling react to just call useEffect only once

  return (
    <div>
      <h3>useEffect call only once</h3>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default UseEffectComp2
