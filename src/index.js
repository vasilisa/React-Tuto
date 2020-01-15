import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; // Note: If you want to use something, you need to import it first. To make the component usable in other parts of the app, you need to export it after creation and import it in the file where you want to use it.
import App from './App_DevComp'; // Note: If you want to use something, you need to import it first. To make the component usable in other parts of the app, you need to export it after creation and import it in the file where you want to use it.

// import AppPart2 from './App_DevComp_part2'; // Note: If you want to use something, you need to import it first. To make the component usable in other parts of the app, you need to export it after creation and import it in the file where you want to use it.

// import * as serviceWorker from './serviceWorker'; // forget about it right now 

ReactDOM.render(<App />, document.getElementById('root')); // We render our first page 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); // forget about it right now 
