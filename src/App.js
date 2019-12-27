import React, { Component } from 'react';
import './App.css';
// import WithClass from './src/hoc/WithClass';
// import withClass from './hoc/withClass';
import Cockpit from './components/Cockpit/Cockpit';
// import Aux from './hoc/Aux'
// import Basic from './Basic/Basic';
import ListAndConditional from './components/Basic/Lists-Conditionals'

import Blog from './Http-Example/containers/Blog/Blog';
class App extends Component {
  render() {
    return (
      // <div className="App" >
      //   <Cockpit></Cockpit>
      //   {/* <Basic></Basic> */}
      //   <hr></hr>
      //   <ListAndConditional></ListAndConditional>
      // </div>

      //using withClass higher order Component approach to wrapping another component
      // <WithClass classes="App" >
      //   <Cockpit></Cockpit>
      //   {/* <Basic></Basic> */}
      //   <hr></hr>
      //   <ListAndConditional></ListAndConditional>
      // </WithClass>

      //using the 2nd HOC approach
      // <Aux className="App" >
      //   <Cockpit></Cockpit>
      //   {/* <Basic></Basic> */}
      //   <hr></hr>
      //   <ListAndConditional></ListAndConditional>
      // </Aux>

      //Reaching Out Http request and response in React example
      <div>
        <Blog />
      </div>
    );
  }
}

export default App;

//2nd HOC approach
// export default withClass(App, "App");
