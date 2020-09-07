import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParrent extends Component {
  constructor(props) {
    super(props)
    this.forwardRef = React.createRef();
  }

  clickHandler = () => {
    this.forwardRef.current.focus();
  }

  render() {
    return (
      <div>
        <p>Forwarding Ref From Parent to Child</p>
        <FRInput ref={this.forwardRef} />
        <button onClick={this.clickHandler}>Click To Focus</button>
      </div>
    )
  }
}

export default FRParrent
