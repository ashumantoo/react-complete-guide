import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

//==================================================================================
//          CLASS BASED COMPONENT EXAMPLE
//==================================================================================
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

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.person[0].name = 'Ashutosh Kumar Mantoo';
    // DON'T Mutate react state directly instead use setState() of the react
    // setState() method takes the newly defined properties and merged with the old existing state property
    // setState() method only available on Component based class which extents the component from the react
    this.setState({
      person: [
        { name: 'Max', age: 29 },
        { name: newName, age: 27 },
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
            React render the Dom so Just pass the reference of the function to the onClick

          - We can pass the method reference from one component to the other component using 
            the props. 
          
          - We can pass the value from a function as a arguments using two methods
            1. By Using the bind method and passing the this keyword and the data as arg --->(Recommended to use)
            2. By using the arrow function and retuning the function value when the button is clicked. -->(use only sometimes) 
               But this second method is not a efficient way to pass the data using the arrow function 
               because react often render the whole components so sometimes it may leads to the unexpected
               behaviour of the app.
            */}
        {/* <button onClick={this.switchNameHandler}>Switch Name</button> */}
        <button onClick={() => this.switchNameHandler('Mantoo!!!')}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler.bind(this, 'Ashutosh Kumar')} />
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


//==================================================================================
//          FUNCTION BASED COMPONENT EXAMPLE
//==================================================================================
// const App = props => {

//   //useState hooks always return an array of two element 
//   //one is the current state or updated state in case we updated the passed object of the object passed 
//   //other one is always be a function that allow us to updated the exiting object
//   const [personsState, setPersonsState] = useState({
//     person: [
//       { name: 'Max', age: 29 },
//       { name: "Ashutosh", age: 27 },
//       { name: 'John', age: 35 }
//     ],
//     // otherState: 'Some other values'
//   });

//   // whenever we used setState() of the useState() hooks, it replace the old object with the new updated object
//   // it doesn't merged new updated object to the old object
//   // so it becomes important to manually include the old state data with the updated data
//   // so this is the one way to include manually the old data
//   // other way is to use the useState hooks multiple times
//   const [otherState, setOtherState] = useState({ otherState: 'some other value' });

//   const switchNameHandler = () => {
//     setPersonsState({
//       person: [
//         { name: 'Max', age: 29 },
//         { name: "Ashutosh Mantoo", age: 27 },
//         { name: 'John', age: 30 }
//       ],
//       // otherState: personsState.otherState //need to manually include the old state data which we don't want to update 
//     })
//   }

//   console.log(personsState, otherState);

//   return (
//     <div className="App" >
//       <h2>My React App</h2>
//       <p>This is really working!!!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.person[0].name} age={personsState.person[0].age} />
//       <Person name={personsState.person[1].name} age={personsState.person[1].age}> My Hobbies : Coding </Person>
//       <Person name={personsState.person[2].name} age={personsState.person[2].age} />
//     </div>
//   );
// }
// export default App;
