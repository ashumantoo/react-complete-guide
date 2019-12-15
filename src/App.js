import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //Props generally passed the data to the outside of the component
  //State generally passed and Managed the data inside the component
  /**
   * State : 
   *   -- State is a special property of the react which only defined inside of a component
   *      which extends the Component class of the React.
   *  
   *  -- state property of the react can be changed and when it changes it leads react to 
   *     re-render the components again.
   */
  state = {
    person: [
      { name: 'Max', age: 29 },
      { name: "Ashutosh", age: 27 },
      { name: 'John', age: 35 }
    ]
  }

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.person[0].name = 'Ashutosh Kumar Mantoo';
    // DON'T Mutate react state directly instead use setState() of the react
    // setState() method takes the newly defined properties and merged with the old existing state property
    this.setState({
      person: [
        { name: 'Max', age: 29 },
        { name: "Ashutosh Mantoo", age: 27 },
        { name: 'John', age: 30 }
      ]
    })
  }

  render() {
    return (
      <div className="App" >
        {/* Passing data using props
        
         <h2>React mys App</h2>
        <p>This is really working!!!</p>
        <Person name="Max" age="28" />
        <Person name="Ashutosh" age="30"> My Hobbies : Coding </Person>
        <Person name="Mantoo" age="26" /> */}


        <h2>My React App</h2>
        <p>This is really working!!!</p>
        {/* Here in onClick, Don't call method with parentheses=() Because it calls immediately as 
            React render the Dom so Just pass the reference of the function to the onClick*/}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age}> My Hobbies : Coding </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>

      //without nesting
      // React.createElement('div', null, 'h1', 'Hello I am react app'),

      // //html nesting div to the h1 tag
      // React.createElement('div', null, React.createElement('h1', 'null', 'Hello I am react app')),

      // //apply css class using className
      // React.createElement('div', { className: 'App' }, React.createElement('h1', 'null', 'Hello I am react app'))
    );
  }
}

export default App;
