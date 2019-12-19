import React, { Component } from "react";

// This ErrorBoundary Concept is good to display the error messages
// But this does not mean we should cluster our whole component with ErrorBoundary
// only use them when it makes sense basically only used when you have some code
// and you know this code might it fails.
//
// So only use ErrorBoundary for cases that you know it might be fails and we can't
// do anything about that because we cant control that.
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error })
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;