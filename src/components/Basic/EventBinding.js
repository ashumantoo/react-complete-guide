import React, { Component } from 'react'

class EventBinding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "Hello"
    }
    // this.clickHandler = this.clickHandler.bind(this);  //3rd mehtod binding function inside the constructor
  }

  // clickHandler() {
  //   this.setState({
  //     message: "Greetings"
  //   })
  //   console.log(this);
  // }

  //4th method using arrow function
  clickHandler = () => {
    this.setState({
      message: "Greetings"
    })
    console.log(this);
  }

  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        {/* 1st method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* 2nd mthod */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBinding
