import React, { useEffect, useState } from 'react';

function UseEffectComp4() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [count]);

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>useEffect with incorrect dependency</h3>
      {count}
    </div>
  )
}

export default UseEffectComp4
