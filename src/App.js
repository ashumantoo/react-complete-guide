import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// import WithClass from './src/hoc/WithClass';
// import withClass from './hoc/withClass';
// import Cockpit from './components/Cockpit/Cockpit';
// import Aux from './hoc/Aux'
import Basic from './components/Basic/Basic';
import ListAndConditional from './components/Basic/Lists-Conditionals';
import JSXComponent from './components/Basic/JsxComponent';
import Welcome from './components/Basic/Welcome';
import EventBinding from './components/Basic/EventBinding';
import ParrentComponent from './components/Basic/ParrentComponent';

// import Counter from '../src/Redux-example/containers/Counter/Counter';
// import Persons from './Redux-example/containers/Persons/Persons';

// import Blog from './Http-Example/containers/Blog/Blog';
import RoutingBlog from './Routing-example/containers/Blog/Blog';

import Todo from './Hooks-example/components/Todo';

import { MUIDataTables } from './components/MUIDataTable/MUIDataTable';
import ConditionalRender from './components/Basic/ConditionalRender';
import BasicForm from './components/Basic/BasicForm';
import LifeCycleA from './components/Basic/LifeCycleA';
import ParentComp from './components/Basic/ParentComp';
import RefsDemo from './components/Basic/RefsDemo';
import InputFocus from './components/Basic/InputFocus';
import FRParrent from './components/Basic/FRParrent';
import HeroParentComp from './components/Basic/HeroParentComp';
import ClickCounter from './components/Basic/ClickCounter';
import HoverdCounter from './components/Basic/HoverdCounter';
import ClickCounterTwo from './components/Basic/ClickCounterTwo';
import HoverCounterTwo from './components/Basic/HoverCounterTwo';
import User from './components/Basic/User';
import Counter from './components/Basic/Counter';
import RenderProps from './components/Basic/RenderProps';
class App extends Component {
  render() {
    return (
      <div className="App" >
        {/* <Basic /> */}
        <hr />
        {/* <ListAndConditional /> */}
        {/* <hr />
        <JSXComponent />
        <hr />
        <Welcome />
        <hr />
        <EventBinding />
        <hr />
        <ParrentComponent />
        <hr />
        <ConditionalRender />
        <hr />
        <BasicForm />
        <hr />
        <LifeCycleA />
        <hr /> */}
        {/* <ParentComp /> */}
        {/* <RefsDemo />
        <InputFocus />
        <FRParrent /> */}
        {/* <HeroParentComp /> */}
        {/* HOC Example */}
        {/* <ClickCounter name="Mantoo" />
        <HoverdCounter /> */}
        {/* Render Props example */}
        <RenderProps />
      </div>

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
      // <BrowserRouter>
      //   <div>
      //     <RoutingBlog />
      //   </div>
      // </BrowserRouter>

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
