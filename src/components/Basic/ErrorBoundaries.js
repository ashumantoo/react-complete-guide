import React, { Component } from 'react'

/**============================================================================
 *                            ERROR BOUNDARIES
 *  1. Error Boundaries are React Components that catch javascript error in 
 *    their child component tree, log those errors. and display a fall-back ui
 * 
 *  2. A class component becomes an Error Boundary by defining either or both
 *     of getDerivedStateFromError() and componentDidCatch() lifecycle methods
 * 
 *  3. The Placement of the Error Boundary also matters as it control if the 
 *     entire app should have the fall-back UI or just the component causing 
 *     the problem
 * 
 *  4. Provides a way to gracefully handle error in application code.
 * 
 */

class ErrorBoundaries extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }


  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundaries
