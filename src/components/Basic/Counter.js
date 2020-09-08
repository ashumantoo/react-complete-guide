import React, { Component } from 'react';

/** ===================================================================================
 *                                       Render Props
 *  1. The Term 'render props' refers to a technique for sharing code between React 
 *     Component using a prop whose value is a function.
 * 
 */

class Counter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    return (
      <div>
        {/* {this.props.render(this.state.count, this.incrementCount)} */}
        {this.props.children(this.state.count, this.incrementCount)} 
      </div>
    )
  }
}

export default Counter
