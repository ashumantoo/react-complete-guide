import React, { Component } from 'react';

/**==================================================================
 *                        REACT Refs
 * 1. Refs provide a way to access DOM nodes or React elements created 
 *    in the render method.
 * 
 * 2. There are few good use case for refs
 *    a. Managing a focus, text selection, or media playback.
 *    b. Triggering imperative animations.
 *    c. Integrating with third-party DOM Libraries.
 */

class RefsDemo extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <p>Ref Demo</p>
        <input type="text" name="email" ref={this.inputRef} />
        <div>
          <input type="text" name="password" />
        </div>
        <div>
          <button onClick={this.clickHandler}>Click</button>
        </div>
      </div>
    )
  }
}

export default RefsDemo
