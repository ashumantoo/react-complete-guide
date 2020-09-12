import React, { useState } from 'react';

/** ================================================================================
 *  1. setState() of the class based componenet updates the state by merging the
 *       new state value with the previous state value automatically.
 * 
 *  2. But in useState hook set method does not merge the new state to the previous
 *    state atuomatically. we have to do it manually by using the spread operator
 *    (...) to copying the old state and then modify the new state.
 */

function UseStateComp3() {
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  });

  return (
    <div>
      <h3>useState hook with object</h3>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={e => {
            setName({
              ...name,
              firstName: e.target.value
            })
          }}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={e => {
            setName({
              ...name,
              lastName: e.target.value
            })
          }}
        />
        <h4>Your first Name - {name.firstName} </h4>
        <h4>Your lastName Name - {name.lastName} </h4>
      </form>
    </div>
  )
}

export default UseStateComp3
