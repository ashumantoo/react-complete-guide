import React, { Component } from 'react';
import WithCounterHoc from './WithCounterHoc';
/** ==============================================================================================
 *  1. The ClickConter and HoverdConter have the same functionality.
 * 
 *  2. Both component incrementing the counter value on different senario
 * 
 *  3. In this senario instead of writing same functionality multiple time in different component 
 *     it's better to create a HOC (Higher Order Component) with same functionality and wrapped 
 *     both the component with this HOC.
 */

class HoverdCounter extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     count: 0
  //   }
  // }

  // clickHandler = () => {
  //   this.setState(prevState => {
  //     return { count: prevState.count + 1 }
  //   })
  // }

  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onMouseOver={incrementCount}>Hovered {count} times</button>
      </div>
    )
  }
}

export default WithCounterHoc(HoverdCounter, 10);
