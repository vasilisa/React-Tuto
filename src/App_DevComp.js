import React from 'react';                     // always put it at the beginning of your component 
import logo from './logo-DevComp.png';         // import our lab image 
import App_DevComp from './App_DevComp.css';   // imports the styling for your page 


import { Button } from 'react-bootstrap'; // to insert a button 

function App() { // Function is an example of a simple React Component. Another type of Component is Class.

  /*  Function is an example of a simple React Component which does not take any states. 
      There is nothing before return() so it could be rewritten as
      const App = () => {} (this is a new ES6 arrow function code format)  
  */
  return (
    <div className="App">
      <header className="App-header">
        <center>
        <h1>Hello from Dev Comp Psy!</h1>  
        </center>
        <img src={logo} className="App-logo" alt="logo" /> 
        <a
          className="App-link"
          href="https://devcompsy.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find out more about us
        </a>
        <Button className="button">Click here</Button>
      </header>
    </div>
  );
}


/* We can add a child function here and pass the props to it from the parent App function 
  First, We will replace the text <h1>Hello from Dev Comp Lab!</h1>  with the Greeting function  
  
  function Greeting() { 
  return <h1>Hello from Dev Comp Psy!</h1>;
  }
*/ 


/* Then, we can put the props to the Greeting function from the App parent function by: 
   const greeting = 'Hello again from Dev Compy Psy!';
   return <Greeting value={greeting} />; 

and 

function Greeting(props) {
  return <h1>{props.value}</h1>;
  }
*/

export default App;





