import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParrentComponent extends Component {

  clickMeHandler(childName) {
    alert('Hello Parrent from ' + childName);
  }

  render() {
    return (
      <div>
        <ChildComponent clickHandler={this.clickMeHandler} />
      </div>
    )
  }
}

export default ParrentComponent
