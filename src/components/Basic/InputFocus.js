import React, { Component } from 'react';
import Input from './Input';
class InputFocus extends Component {
  // We can also create ref attributes to the our defined component
  //but this can only be possible on class based component
  constructor(props) {
    super(props)
    this.componentRef = React.createRef();
  }

  inputFocusHandler = () => {
    this.componentRef.current.focusInput(); //this focusInput function defined in Input child component
  };

  render() {
    return (
      <div>
        <p>Ref in our defined component</p>
        {/* this is our component */}
        <Input ref={this.componentRef} />
        <button onClick={this.inputFocusHandler}>Click To Focus</button>
      </div>
    )
  }
}

export default InputFocus;
