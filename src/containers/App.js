import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
// import Basic from './Basic/Basic';
import ListAndConditional from '../components/Basic/Lists-Conditionals'
class App extends Component {
  render() {
    return (
      <div className="App" >
        <Cockpit></Cockpit>
        {/* <Basic></Basic> */}
        <hr></hr>
        <ListAndConditional></ListAndConditional>
      </div>
    );
  }
}

export default App;
