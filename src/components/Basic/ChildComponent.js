import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.clickHandler('Child')}>Clicke Me</button>
    </div>
  )
}

export default ChildComponent
