import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';
/**==========================================================================================
 *                  Component Life Cycle Phase
 *  1. MOUNTING       --> When an instance of component is being created and inserted into the DOM.
 *      Methods       --> (constructor, static getDerivedStateFromProps, render, componentWillMount)             
 * 
 *  2. UPDATING       --> When a component is being re-rendered as a result of changes to either its 
 *                        props or state.
 *      Methods       --> (static getDrivedStateFromProps, shouldComponentUpdate, render, 
 *                        getSnapShotBeforeUpdate and componentDidUpdate)
 * 
 *  3. UNMOUNTING     --> When a component is being removed from the DOM
 *      Methods       --> (componentWillUnmount)
 * 
 *  4. ERROR HANDLING --> When there is an error during rendering, in a lifecycle mehtod, or
 *                        in the constructor of any child component.
 *      Methods       -->  (static getDerivedStateFromError and componentDidCatch)
 */

class LifeCycleA extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "Mantoo"
    }
    console.log("1 LifeCycle A constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2 LifeCycle A getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('4 LifeCycle A componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('LifeCycle A shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifeCycle A getSnapshopBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('LifeCycle A componentWillUpdate');
  }

  changeNameHandler = () => {
    this.setState({
      name: "Ashutosh"
    })
  }
  render() {
    console.log('3 LifeCycle A render');
    return (
      <div>
        <p>LifeCycle A Component</p>
        <p> {this.state.name} </p>
        <LifeCycleB />
        <button onClick={this.changeNameHandler}>Chagne Name</button>
      </div>
    )
  }
}

export default LifeCycleA
