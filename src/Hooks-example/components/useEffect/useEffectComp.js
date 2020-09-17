import React, { useEffect, useState } from 'react';

/**=================================================================================
 *                               useEffect hook
 *  1. The useEffect hook lets you perform side Effects in functional component
 *  
 *  2. It is a close replacement for componentDidMount, componenetDidUpdate and
 *     componenetWillUnmount. 
 * 
 */

function UseEffectComp() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('effect render');
    document.title = `You Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)} >Click {count} times</button>
    </div>
  )
}

export default UseEffectComp
