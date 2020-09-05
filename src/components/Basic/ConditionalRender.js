import React, { Component } from 'react';

/**====================================================================
 *  1. if/else
 *  2. Element Variables
 *  3. Ternary conditional operator
 *  4. short Circuit operator
 */

class ConditionalRender extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      displayMessage: false
    }
  }

  render() {
    // return (
    //   <div>
    //     <div>Welcome Guest</div>
    //     <div>Welcome Logged in User</div>
    //   </div>
    // )

    /*
    //if else
    if (this.state.isLoggedIn) {
      return <div>Welcome User</div>
    } else {
      return <div>Welcome Guest</div>
    }
    */

    /*
    //Element Variables
    let message;
    if (this.state.displayMessage) {
      message = <div>Hi, user!</div>
    } else {
      message = <div>Hi, Guest</div>
    }

    return <div> {message} </div>
    */

    //ternary operator
    return this.state.isLoggedIn ? <div>Welcome user</div> : <div>Welcome guest</div>

    //short circuit operator
    //return this.state.isLoggedIn && <div>Welcome user</div>
  }
}

export default ConditionalRender
