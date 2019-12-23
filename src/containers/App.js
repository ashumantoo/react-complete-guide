import React, { Component } from 'react';
import './App.css';
import WithClass from '../hoc/WithClass'
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

      //using withClass higher order Component approach to wrapping another component
      // <WithClass classes="App" >
      //   <Cockpit></Cockpit>
      //   {/* <Basic></Basic> */}
      //   <hr></hr>
      //   <ListAndConditional></ListAndConditional>
      // </WithClass>
    );
  }
}

export default App;
