import React, { useState } from 'react';

/**=====================================================================================
 *  --> Any Time if you want to set the state which depends upon the previous value of
 *      the state then inside the set method of the useState hook pass a callback which 
 *      will give you the previous state.
 */

function UseStateComp2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increment5 = () => {
    for (let i = 0; i < 5; i++) {
      // setCount(count + 1); this will not increment value 5 times
      setCount(prevCount => prevCount + 1);
    }
  }
  return (
    <div>
      <h3>useState Hooks with previous state Value</h3>
      Count : {count}
      <div>
        <button onClick={() => setCount(count + 1)} >Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => increment5()}>Increment 5</button>
      </div>
    </div>
  )
}

export default UseStateComp2
