import React, { useState } from 'react';

/**=======================================================================================
 *                                         useState hook
 *  1. The useState hook lets you add state to functional components.
 * 
 *  2. In classes, the state is always an object.
 * 
 *  3. With the useState hook, the state doesn't have to be an object.
 * 
 *  4. The useState hook returns an array with the 2 elements.
 * 
 *  5. The First element is the current value of the state, and the second element is
 *     a state setter function.
 * 
 *  6. New state value depends on the previous state value? You can pass a function on
 *     the setter function
 * 
 *  7. When dealing with objects or arrays, always make sure to spread your state 
 *     variable and then call the setter function.
 *                  
 *                                         Rules of Hooks
 *  1. Only Call Hooks at the Top Level
 *     Don't call hooks inside loops, conditions or nested functions
 * 
 *  2. Only Call Hooks from React Functions
 *     Call them from within React functional components and not just regular javascript
 *     functions.
 */

const UseStateComp = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>useState hook example</h3>
      <button
        onClick={
          () => setCount(count + 1)
        } >
        Clicked {count} times
        </button>
    </div>
  )
}

export default UseStateComp;
