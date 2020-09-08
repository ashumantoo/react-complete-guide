import React from 'react'
import { Component } from 'react'
import WithCounterHoc from './WithCounterHoc';

class ClickCounter extends Component {
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
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <p>Higher Order Component</p>
        <button
          onClick={incrementCount}
        >
          {name} Clicked {count} times
          </button>
      </div >
    )
  }
}

export default WithCounterHoc(ClickCounter, 5);