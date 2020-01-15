import React from 'react';      // always put it at the beginning of your component 
import logo from './logo.svg';  // import a default React logo image 
import './App.css';             // imports the styling for your page 

function App() { // Function is an example of a simple React Component. Another type of Component is Class. 
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
