import React, { useState } from 'react'
import UseEffectComp2 from './useEffectComp2';

function UseEffectComp3() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h3>Cleanup in useEffect hook</h3>
      <button onClick={() => setDisplay(!display)} >Toggle Display</button>
      {display && <UseEffectComp2 />}
    </div>
  )
}

export default UseEffectComp3
