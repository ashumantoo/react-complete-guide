import React, { Component } from 'react'


/**=======================================================================================
 * -- Always make use of setState in class component never modify the sate directily that 
 *    will not render on to the ui because react will only know to update the ui or re-render
 *    the ui, using the setState(),
 * 
 * -- Code has to be executed after the state has been updated? Place the code in the call
 *    function which is the second argument to the setState method.
 * 
 * -- When you have to update state based on the previous state value, pass in a function as
 *    an argument instread of the regular object. 
 =========================================================================================*/


class Welcome extends Component {

  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      visitorNumber: 0
    }
  }

  subscribeHandler() {
    // this.state.message = "update message text" //this will not work
    this.setState({
      ...this.state,
      message: "Thank you for subscribing",
      visitorNumber: this.state.visitorNumber + 1
    })
  }

  incrementVisitorHandler = () => {
    this.setState({
      ...this.state,
      visitorNumber: this.state.visitorNumber + 1
    }, () => {
      console.log('Callback Value', this.state.visitorNumber);
    })
    console.log(this.state.visitorNumber);
  }

  render() {
    return (
      <div>
        <h4 style={{ fontWeight: "normal" }}> {this.state.message} | you are visitor no : {this.state.visitorNumber} </h4>
        <button onClick={() => this.subscribeHandler()}>Subscribe</button>
        <button onClick={() => this.incrementVisitorHandler()}>Increment Visitor</button>
      </div>
    )
  }
}

export default Welcome
