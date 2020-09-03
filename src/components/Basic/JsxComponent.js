import React, { Component } from 'react'

class JsxComponent extends Component {
  render() {
    /*
    return (
      <div>
        <h4>Creating html Element using React.createElement</h4>
      </div>
    )
    */
    return (
      // React.createElement("div", null, "Html div element from React.createElement()")
      //Nested example
      React.createElement("div", null,
        React.createElement('div', null,
          React.createElement('h4',
            { id: "hello", className: "title" },
            "hello world from jsx using React.createElement")
        ), React.createElement('div', null,
          React.createElement('h5', null, "some more text")
        ))
    )
  }
}

export default JsxComponent
