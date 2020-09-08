import React from 'react';
import { Component } from 'react';

/**
 * 
 * @param {} WrappedComponent
 * HOC - 1. To Share common functionality between the components
 *       2. A Pattern where a function takes a component as a parameter and returned 
 *          an new/Modified componet
 */

const WithCounterHoc = (WrappedComponent) => {
  class WithCounterHoc extends Component {
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
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      )
    }
  }
  return WithCounterHoc;
}

export default WithCounterHoc;
