import React, { Component } from 'react';
import './App.css';
import Basic from './Basic/Basic';
import ListAndConditional from './Basic/Lists-Conditionals'
class App extends Component {
  render() {
    return (
      <div className="App" >
        <h1>My React App</h1>
        <p>This is really working!!!</p>
        {/* <Basic></Basic> */}
        <hr></hr>
        <ListAndConditional></ListAndConditional>
      </div>
    );
  }
}

export default App;
