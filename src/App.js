import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>React App</h4>
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
