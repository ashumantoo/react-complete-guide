import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Basic from './Basic/Basic';
import ListAndConditional from './Basic/Lists-Conditionals'
class App extends Component {
  render() {

    const classes = ['font', 'skyblue'].join(' '); // this join gives "red bold"

    return (
      <StyleRoot>
        <div className="App" >
          <h1>My React App</h1>
          <p className={classes}>This is really working!!!</p>
          {/* <Basic></Basic> */}
          <hr></hr>
          <ListAndConditional></ListAndConditional>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
