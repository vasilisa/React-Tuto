import React  from 'react';               // always put it at the beginning of your component 
import logo   from './logo-DevComp.png';   // import our lab image
import labpic from './labpic.jpg';   // import our lab image

import App from './App_DevComp_part2.css';           // imports the styling for your page 
import { Button } from 'react-bootstrap'; // to insert a button 

  /*
    First run an example without the onClick but just with the greeting state 
  */

// class AppPart2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           greeting: 'Hello from your state, Dev Comp Psy!'
//         }
//     };

//   render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <center>
//         <h1>{this.state.greeting}</h1>  
//         </center>
//         <img src={logo} className="App-logo" alt="logo" /> 
//         <a
//           className="App-link"
//           href="https://devcompsy.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Find out more about us
//         </a>
//         <Button className="button">Click here</Button>
//       </header>
//     </div>
//   );
// }

// }

// export default AppPart2;


/* Now let's introduce the interactive onClick method such that the picture logo DevComp changes to the lab pic when we click on the button 
*/ 

// class AppPart2 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           greeting: 'Hello from Dev Comp Psy!'
//         }

//     this.handleClick.bind(this); 

//     console.log(this.state) // Log the content of the state in the browser console 
//     };

  /* Introduce a function that will take care of changing the greeting state when button is clicked */
  /* This is a new ES6 syntax 
  // handleClick = () => {
  //   this.setState({greeting: "Join us, we are a lot of fun!"});
  // }
  Do not forget to change the call for onClick to onClick={this.handleClick}
  */


/* This is an Old before ES6 syntax */
// handleClick(){
//     this.setState({greeting: "Join us, we are a lot of fun!"});
//   }

//   render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <center>
//         <h1>{this.state.greeting}</h1>  
//         </center>
//         <img src={logo} className="App-logo" alt="logo" /> 
//         <a
//           className="App-link"
//           href="https://devcompsy.org/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Find out more about us
//         </a>
//         <Button className="button"
//           onClick = {() =>this.handleClick()}> 
//           Click here
//         </Button>
//       </header>
//     </div>
//   );
// }

// }
// export default AppPart2;

/* We can change multiple states on click */

class AppPart2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          greeting: 'Hello from Dev Comp Psy!',
          image: logo
        }

    this.handleClick.bind(this); 

    console.log(this.state) // Log the content of the state in the browser console 
    };

  

/* This is an Old before ES6 syntax */
handleClick(){
    this.setState({
      greeting: "Join us, we are a lot of fun!",
      image: labpic});
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
        <h1>{this.state.greeting}</h1>  
        </center>
        <img src={this.state.image} className="App-logo" alt="logo" /> 
        <a
          className="App-link"
          href="https://devcompsy.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find out more about us
        </a>
        <Button className="button"
          onClick = {() =>this.handleClick()}> 
          Click here
        </Button>
      </header>
    </div>
  );
}

}
export default AppPart2;






