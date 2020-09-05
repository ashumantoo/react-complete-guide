import React, { Component } from 'react';

class LifeCycleB extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "Mantoo"
    }
    console.log("1 LifeCycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2 LifeCycle B getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('4 LifeCycle B componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifeCycle B shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycle B getSnapshopBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifeCycle B componentWillUpdate');
  }

  render() {
    console.log('3 LifeCycle B render');
    return (
      <div>
        <p>LifeCycle B Component</p>
      </div>
    )
  }
}

export default LifeCycleB
