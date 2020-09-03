import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// import WithClass from './src/hoc/WithClass';
// import withClass from './hoc/withClass';
// import Cockpit from './components/Cockpit/Cockpit';
// import Aux from './hoc/Aux'
// import Basic from './Basic/Basic';
// import ListAndConditional from './components/Basic/Lists-Conditionals'

// import Counter from '../src/Redux-example/containers/Counter/Counter';
// import Persons from './Redux-example/containers/Persons/Persons';

// import Blog from './Http-Example/containers/Blog/Blog';
import RoutingBlog from './Routing-example/containers/Blog/Blog';

import Todo from './Hooks-example/components/Todo';

import { MUIDataTables } from './components/MUIDataTable/MUIDataTable';
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
      // <div>
      //   <Blog />
      // </div>

      // Routing Example Blog Component
      <BrowserRouter>
        <div>
          <RoutingBlog />
        </div>
      </BrowserRouter>

      // Redux Example
      // <div className="App">
      //   <Counter />
      //   <hr />
      //   <ol>
      //     <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
      //   </ol>
      //   <Persons />
      //   <hr />
      //   <Todo />
      //   <hr />
      //   <MUIDataTables />
      // </div>

      // <div className="App">
      //   <div>
      //     <br/>
      //     <Todo />
      //   </div>
      // </div>
    );
  }
}

export default App;

//2nd HOC approach
// export default withClass(App, "App");
