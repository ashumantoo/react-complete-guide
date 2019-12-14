import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h2>React mys App</h2>
      <p>This is really working!!!</p>
      <Person name="Max" age="28" />
      <Person name="Ashutosh" age="30"> My Hobbies : Coding </Person>
      <Person name="Mantoo" age="26" />

    </div>

    //without nesting
    // React.createElement('div', null, 'h1', 'Hello I am react app'),

    // //html nesting div to the h1 tag
    // React.createElement('div', null, React.createElement('h1', 'null', 'Hello I am react app')),

    // //apply css class using className
    // React.createElement('div', { className: 'App' }, React.createElement('h1', 'null', 'Hello I am react app'))
  );
}

export default App;
