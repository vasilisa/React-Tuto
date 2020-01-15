# React-Tuto

This is a short tutorial to start with React JS front end building. 

## Prerequisites

1. Install NPM (Node package manager) and Node.js from http://npmjs.org/. 
2. Install Babel (JS compiler): ``npm install babel-core babel-loader babel-preset-env babel-preset-react babel-webpack-plugin --save-dev``
3. Once installed you can proceed with React JS: 
``npm install -g create-react-app``
4. Then you can create your first project with React: ``npx create-react-app myfirstreact``

Once done you will see many folders inside your new ``myfirstreact`` repository. 
**Important**: You might modify the content of some of them but, please, do not rename them. 

To start your React project on the server, cd to ``myfirstreact`` folder and type: `` npm start``. It will launch the React in your browser on the localhost default or available port.  
4. Editor: you might want to use some editor with Babel (JavaScript) syntax to nice visualization of your JS code (aka ``Sublime``)  

## The content of ``myfirstreact`` 
``package.json`` contains the meta-information about your React JS project, dependencies and versions used. Do not modify it! 

Inside ``myfirstreact`` folder you will see the folder ``src`` (=source).  
The `css` files stand for styling and outline of your HTML documents. The main files are ``***.js`` files. 
We can delete all test components for right now. 
We have two main components ``index.js`` and ``App.js``. ``index.js`` is the entry point to the app. It is sometimes called ``main.js`` in the tutorials.  
With complex apps and multiple components a good practice is to create one folder per component and put all components in the ``./src/components/ComponentName``. The ``index.js`` stays at the root at ``./src``. 

## Create a custom component 
Let's modify the ``App.js`` to display the lab logo and redirect the user to our lab page. We will also add some styling to our lab logo image.
First, let's create a ``App_DevComp.js`` file from ``App.js``. 

**IMPORTANT:** Always put ``import React from 'react' `` on top of your script. 
Then, we replace the default React JS image with our lab pic by specifying the path to it. 
``import logo from './logo-DevComp.png'``

In order to display our new component, we have to import it in the ``index.js``. 
``import App from './App_DevComp';``

**Notice**, when you change something in your component, it is automatically updated in your browser, no need to reload. 

**Important:** You should activate the developer tool on your browser. This way when you right hand click --> click on the `Inspect`, you will see the console. Very important for the debugging of your code. 

### Styling the elements  of our component ###
We can change the style of elements in our component by modifying the ``.css`` file of the component. 
We can open a default ``App.css`` file. 

**Notice**, that the names of elements in the ``App.css`` starts with `.` and correspond to the ``className`` assignments in the ``App.js``. ClassNames in the ``App.js`` are nested so the properties are applied starting from the top level. 
For example, we can change the size of the DevComp logo picture on the screen by scaling its height and width in the css ``.App-logo`` part. 

We can call one function within the other one. The called function is a child component to 

### Function component with a prop ###
We can pass information from one component to another using ``props`` 
The structure of React Component resembles a "tree". You have **parent** and **child** components. 
You can pass the props ONLY from parent component to the child component. In other words, React implements **unidirectional data flow**, also called 'one-way data-binding'.
See the exemple with the function App and its child function Greeting from the `App_DevComp.js`

### Adding a button to our page ###
We can also include a button on our page but this won't be interactive! 
For this we will install `react-bootstrap` first: 
`npm install react-bootstrap`
and then import it in our `App_DevComp.js` component.  

## PART 2:  Interactive web page 
### Creating a Class component with a changing state 
So far our web page was not interactive. 
To make it so, we need to use `Class components` which allows to set and change the `states`. 
 
Let's create a class `App_DevComp_part2.js` and make a clickable button. Each time you click on it you will see the change in the greeting message.  
 
**What we need**:
- Create a class component 
- Define the greeting state in the class constructor 
- Introduce `onClick` method that will be linked to `handleClick` function when the button is clicked. In other words, `onClick` will have a function `handleClick` as an argument.  
-  Insert this.setState inside the `handleClick`

**IMPORTANT** and **CONFUSING** SYNTAX: there are 2 main ways to create functions and pass the arguments: old style and a new ES6 *arrow-function* style. If you mix the two (and you will) it won't work.
1. Old style: 
				<pre>handleClick() {
					this.setState(greeting: "Join us, we are a lot of fun!")
				}
				</pre>
Then in the render when inserting the button: 
<pre>  < Button className="button"
	          onClick = {() => this.handleClick()}>
	          Click here
	        </Button>
</pre>
2. New style:  
				<pre> handleClick() => {
					this.setState(greeting: "Join us, we are a lot of fun!")
				}
</pre>

Then in the render when inserting the button: 
<pre>  < Button className="button"
	          onClick = {this.handleClick}>
	          Click here
	        </Button>
</pre>




 
- 
 

