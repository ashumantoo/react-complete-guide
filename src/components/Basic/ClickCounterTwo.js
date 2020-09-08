import React from 'react'
import { Component } from 'react'
import WithCounterHoc from './WithCounterHoc';

class ClickCounterTwo extends Component {

  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <p>Render Props Example</p>
        <button
          onClick={incrementCount}
        >
          {name} Clicked {count} times
          </button>
      </div >
    )
  }
}

export default ClickCounterTwo;